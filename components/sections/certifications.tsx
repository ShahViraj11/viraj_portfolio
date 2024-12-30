import { Certification } from "@/components/certification";
import { ParallaxText } from "../parallax-text";
import { motion } from 'framer-motion';
import { useNavContext } from "../context/nav-context";
import { fileSystem } from "@/lib/file-system";

export const Certifications = () => {
  const { setRoute } = useNavContext();

  return (
    <motion.section className="py-10 snap">
      <ParallaxText baseVelocity={-4} className="text-[5em]">
        Certifications.Certifications.Certifications.
      </ParallaxText>

      {
        Object.entries(fileSystem.certifications).map(([certName, cert], index) => (
          <Certification
            key={index}
            name={certName}
            description={cert.description}
            issuedBy={cert.issuedBy}
            date={cert.date}
            credentialLink={cert.credentialLink} // Use the correct property name
            gallery={cert.gallery} // Pass the gallery to the Certification component
          />
        ))
      }
    </motion.section>
  );
};
