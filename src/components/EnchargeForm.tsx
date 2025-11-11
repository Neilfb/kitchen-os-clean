interface EnchargeFormProps {
  formId: string;
  title?: string;
  description?: string;
}

/**
 * Encharge Form Embed Component
 *
 * Simple wrapper for Encharge forms - script is loaded in layout.tsx
 */
export default function EnchargeForm({ formId, title, description }: EnchargeFormProps) {
  return (
    <div className="encharge-form-container">
      {title && (
        <h2 className="text-3xl font-bold text-brand-navy mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-600 mb-6">
          {description}
        </p>
      )}
      <div
        className="encharge-form-embed"
        data-encharge-form-id={formId}
      />
    </div>
  );
}
