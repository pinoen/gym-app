import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Bodyweight Strength",
    description:
      "This class uses your own body weight as resistance to build strength and endurance. It is a great option for beginners or those who want to get a full-body workout without using weights.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Yoga is a mind-body practice that combines physical postures, breathing exercises, and meditation. It is a great way to improve your flexibility, strength, and mental well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Great exercises for strengthening your core and improving your balance. With consistent effort, you will start to see results from your ab workout in no time.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "This is a low-impact workout that focuses on core strength, flexibility, and posture. It is a great way to improve your balance and coordination.",
    image: image5,
  },
  {
    name: "Training Classes",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Our experienced trainers will create a customized workout plan for you, and we offer a variety of classes to fit your needs. Whether you're a beginner or a seasoned athlete, we have something for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;