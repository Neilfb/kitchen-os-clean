#!/bin/bash

# Revolut API Key Test Script
# This script validates your Revolut API credentials and tests order creation

echo "======================================"
echo "Revolut API Credentials Test"
echo "======================================"
echo ""

# Check if API key is set
if [ -z "$REVOLUT_SECRET_KEY" ]; then
  echo "❌ ERROR: REVOLUT_SECRET_KEY environment variable is not set"
  echo ""
  echo "Please set it first:"
  echo "  export REVOLUT_SECRET_KEY=\"your_key_here\""
  echo ""
  exit 1
fi

# Validate API key format
echo "🔍 Validating API key format..."
KEY_PREFIX="${REVOLUT_SECRET_KEY:0:11}"
KEY_LENGTH="${#REVOLUT_SECRET_KEY}"

echo "   Key prefix: ${REVOLUT_SECRET_KEY:0:20}..."
echo "   Key length: $KEY_LENGTH characters"

if [[ "$REVOLUT_SECRET_KEY" == sk_sandbox_* ]]; then
  echo "   ✅ Sandbox key detected (sk_sandbox_)"
  ENDPOINT="https://sandbox-merchant.revolut.com/api/orders"
elif [[ "$REVOLUT_SECRET_KEY" == sk_live_* ]]; then
  echo "   ⚠️  Production key detected (sk_live_)"
  echo "   Using production endpoint!"
  ENDPOINT="https://merchant.revolut.com/api/orders"
elif [[ "$REVOLUT_SECRET_KEY" == sk_* ]]; then
  echo "   ⚠️  Revolut API key detected (${REVOLUT_SECRET_KEY:0:15}...)"
  echo "   Assuming production endpoint based on key format"
  ENDPOINT="https://merchant.revolut.com/api/orders"
else
  echo "   ❌ Invalid key format! Key should start with 'sk_'"
  echo ""
  echo "   Your key starts with: ${REVOLUT_SECRET_KEY:0:15}..."
  echo ""
  exit 1
fi

echo ""
echo "🌐 Testing API connection..."
echo "   Endpoint: $ENDPOINT"
echo "   API Version: 2024-09-01"
echo ""
echo "📤 Sending test order request..."
echo ""

# Make the API call
HTTP_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$ENDPOINT" \
  -H "Authorization: Bearer ${REVOLUT_SECRET_KEY}" \
  -H "Content-Type: application/json" \
  -H "Revolut-Api-Version: 2024-09-01" \
  -d '{
    "amount": 1000,
    "currency": "GBP",
    "description": "Test Order from Kitchen OS"
  }')

# Extract HTTP status code and body
HTTP_STATUS=$(echo "$HTTP_RESPONSE" | tail -n 1)
RESPONSE_BODY=$(echo "$HTTP_RESPONSE" | sed '$d')

echo "======================================"
echo "📨 Response"
echo "======================================"
echo ""
echo "HTTP Status: $HTTP_STATUS"
echo ""
echo "Response Body:"
echo "$RESPONSE_BODY" | jq '.' 2>/dev/null || echo "$RESPONSE_BODY"
echo ""
echo "======================================"
echo ""

# Interpret the result
case $HTTP_STATUS in
  201)
    echo "✅ SUCCESS! Your API key is working correctly!"
    echo ""
    echo "   The order was created successfully."
    echo "   You can now use this API key in your application."
    ;;
  401)
    echo "❌ AUTHENTICATION FAILED (401 Unauthorized)"
    echo ""
    echo "   Your API key is INVALID, EXPIRED, or REVOKED."
    echo ""
    echo "   Common causes:"
    echo "   1. Wrong environment: Using production key with sandbox endpoint (or vice versa)"
    echo "   2. Key expired: The API key has been revoked or expired"
    echo "   3. Copy/paste error: Missing characters or extra spaces in the key"
    echo "   4. Wrong account: Using a key from a different Revolut merchant account"
    echo ""
    echo "   Next steps:"
    echo "   1. Log into Revolut Business: https://business.revolut.com"
    echo "   2. Go to: Merchant API → API Keys"
    echo "   3. Regenerate your sandbox secret key"
    echo "   4. Copy the ENTIRE key (starts with sk_sandbox_)"
    echo "   5. Update your environment variable and try again"
    echo ""
    ;;
  400|422)
    echo "⚠️  REQUEST ERROR ($HTTP_STATUS)"
    echo ""
    echo "   Good news: Your API key is VALID and authenticated!"
    echo "   Bad news: There's an issue with the request payload."
    echo ""
    echo "   This usually means a validation error in the request data."
    echo "   Check the response body above for details."
    echo ""
    ;;
  404)
    echo "❌ ENDPOINT NOT FOUND (404)"
    echo ""
    echo "   The API endpoint doesn't exist. This shouldn't happen!"
    echo "   Verify you're using the correct API URL."
    echo ""
    ;;
  500|502|503)
    echo "❌ SERVER ERROR ($HTTP_STATUS)"
    echo ""
    echo "   Revolut's servers are experiencing issues."
    echo "   This is not a problem with your API key."
    echo "   Try again in a few minutes."
    echo ""
    ;;
  *)
    echo "⚠️  UNEXPECTED STATUS CODE: $HTTP_STATUS"
    echo ""
    echo "   Check the response body above for details."
    echo ""
    ;;
esac

echo "======================================"
echo ""

# Exit with appropriate code
if [ "$HTTP_STATUS" = "201" ]; then
  exit 0
else
  exit 1
fi
