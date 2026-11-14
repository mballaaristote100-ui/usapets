import React from 'react';
import { type Puppy } from '@/data/puppies';
import { ShieldCheck, Syringe, CheckCircle2, Cpu, FileText, Award } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


interface Props {
  puppy: Puppy;
}

interface HealthItem {
  label: string;
  value: string | boolean;
  icon: React.ElementType;
  type: 'check' | 'text';
}

export default function PuppyHealthSection({ puppy }: Props) {
  const healthItems: HealthItem[] = [
    { label: 'Veterinary Check', value: puppy.vetChecked, icon: ShieldCheck, type: 'check' },
    { label: 'Vaccination Status', value: puppy.vaccinationStatus, icon: Syringe, type: 'text' },
    { label: 'Deworming', value: puppy.dewormingStatus, icon: CheckCircle2, type: 'text' },
    { label: 'Microchip', value: puppy.microchipStatus, icon: Cpu, type: 'check' },
    { label: 'Health Records', value: true, icon: FileText, type: 'check' },
    { label: 'Health Guarantee', value: puppy.healthGuarantee, icon: Award, type: 'text' },
  ];

  return (
    <section className="py-10 border-t border-border">
      <p className="section-label mb-3">Health & Care</p>
      <h2 className="font-display font-700 text-2xl text-foreground mb-6">
        {puppy.name}&apos;s Health Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthItems.map((item) => {
          const Icon = item.icon;
          const hasValue = item.type === 'check' ? !!item.value : !!(item.value && item.value !== false);
          return (
            <div
              key={`health-item-${item.label}`}
              className={`rounded-xl p-4 border flex items-start gap-3 ${
                hasValue
                  ? 'bg-green-50 border-green-100' :'bg-muted/30 border-border'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  hasValue ? 'bg-green-100' : 'bg-muted'
                }`}
              >
                <Icon size={17} className={hasValue ? 'text-green-700' : 'text-muted-foreground'} />
              </div>
              <div>
                <p className={`font-display font-600 text-sm mb-0.5 ${hasValue ? 'text-green-800' : 'text-muted-foreground'}`}>
                  {item.label}
                </p>
                <p className={`text-xs leading-relaxed ${hasValue ? 'text-green-700' : 'text-muted-foreground'}`}>
                  {item.type === 'check'
                    ? item.value
                      ? 'Completed ✓'
                      : 'Not completed'
                    : item.value
                    ? String(item.value)
                    : 'Not available'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground mt-5 max-w-lg">
        All health information is verified by our veterinarian. Detailed documentation is provided at the time of pickup or delivery. Contact us with any questions about {puppy.name}&apos;s health.
      </p>
    </section>
  );
}