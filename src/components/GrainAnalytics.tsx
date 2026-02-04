'use client';

import { createGrainAnalytics } from '@grainql/analytics-web';

// Initialize once — page views are tracked automatically
createGrainAnalytics({
  tenantId: 'kitchen-os-2mk799',
});

export default function GrainAnalytics() {
  return null;
}
