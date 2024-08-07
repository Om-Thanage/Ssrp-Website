import styles from './ostyle.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import { useCursorContext } from '../../components/cursor/CursorContext';
import Projects from './ProjectsDetails';

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  useEffect(() => {
    if (modalContainer.current) {
      // Move Container
      xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
      yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
      // Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
      // Move cursor label
      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
    }

    AOS.init({ duration: "2000" });
  }, []);

  const moveItems = (x, y) => {
    if (xMoveContainer.current) xMoveContainer.current(x);
    if (yMoveContainer.current) yMoveContainer.current(y);
    if (xMoveCursor.current) xMoveCursor.current(x);
    if (yMoveCursor.current) yMoveCursor.current(y);
    if (xMoveCursorLabel.current) xMoveCursorLabel.current(x);
    if (yMoveCursorLabel.current) yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  const { cursorVariant, variants, textEnter, textLeave } = useCursorContext();

  return (
    <div className="project-container">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <h1
        className='project-heading'
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        data-aos="zoom-in"
      >
        Orbital Endeavors
      </h1>
      <main
        onMouseMove={(e) => { moveItems(e.clientX, e.clientY); }}
        className={styles.projects}
      >
        <div className={styles.body}>
          {
            Projects.map((project) => (
              <Project
                key={project.id-1}  
                index={project.id-1}  
                title={project.title}
                author={project.author}
                manageModal={manageModal}
                image={project.src}
              />
            ))
          }
        </div>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: `${index * -100}%` }}
            className={styles.modalSlider}
          >
            {
              Projects.map((project) => (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: project.color }}
                  key={`modal_${project.id}`}  
                >
                  <img
                    src={`/assets/images/project_images/${project.src}`}
                    width={250}
                    height={0}
                    alt={project.title}
                  />
                </div>
              ))
            }
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </main>
    </div>
  );
}
