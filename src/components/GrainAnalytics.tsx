'use client';

import { useEffect } from 'react';
import { createGrainAnalytics } from '@grainql/analytics-web';

export default function GrainAnalytics() {
  useEffect(() => {
    createGrainAnalytics({
      tenantId: 'kitchen-os-2mk799',
    });
  }, []);

  return null;
}
