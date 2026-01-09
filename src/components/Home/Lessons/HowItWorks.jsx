import { BookOpen, Heart, Save, Crown } from "lucide-react";
import Container from "../../Shared/Container";

const HowItWorks = () => {
  const steps = [
    {
      title: "Explore Life Lessons",
      description: "Browse lessons shared from real experiences across different categories and emotions.",
      icon: BookOpen,
    },
    {
      title: "Connect Emotionally",
      description: "Discover lessons by emotional tone — reflective, motivational, healing, or inspiring.",
      icon: Heart,
    },
    {
      title: "Save What Resonates",
      description: "Save meaningful lessons to revisit whenever you need clarity or motivation.",
      icon: Save,
    },
    {
      title: "Unlock Deeper Wisdom",
      description: "Upgrade to premium and access exclusive, in-depth life lessons.",
      icon: Crown,
    },
  ];

  return (
    <Container>
      {/* Header */}
      <header className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold uppercase tracking-tight mb-2">
          HOW WE WORK?
        </h2>
        <p className="text-gray-500">
          Discover, save, and share life lessons that truly matter.
        </p>
      </header>

      {/* Steps Container */}
      <div className="relative">
        {/* Horizontal Dotted Line */}
        <div className="md:absolute md:top-16 md:left-0 md:w-full md:h-0 md:border-t-2 md:border-dashed md:border-gray-300 md:z-0 md:block hidden" />

        {/* Steps Grid */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="relative w-22 h-22 rounded-full bg-primary  shadow-xl flex items-center justify-center mb-6 border-8 border-secondary">
                <step.icon className="text-white w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;