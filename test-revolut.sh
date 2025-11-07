#!/bin/bash

# Test Revolut API credentials directly
# This will show if your API key is working

echo "Testing Revolut API credentials..."
echo ""

curl -X POST https://sandbox-merchant.revolut.com/api/orders \
  -H "Authorization: Bearer ${REVOLUT_SECRET_KEY}" \
  -H "Content-Type: application/json" \
  -H "Revolut-Api-Version: 2024-09-01" \
  -d '{
    "amount": 1000,
    "currency": "GBP",
    "description": "Test Order"
  }' \
  -v

echo ""
echo ""
echo "If you see 401: Your API key is invalid/expired"
echo "If you see 400/422: Your API key works but payload is invalid"
echo "If you see 201: Success! API key is working"
