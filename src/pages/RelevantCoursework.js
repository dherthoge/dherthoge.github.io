import React from "react";
import "../styles/RelevantCoursework.css";

function RelevantCoursework() {
  return (
    <div className="relevantCoursework">
      <h1 className="title">Relevant Coursework</h1>
      <div className="content">
          
        <h2 className="firstSubTitle">Spring 2023</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-P 436 &ensp; Introduction to Operating Systems</h3>
              <p>
                &ensp; Organization and construction of computer systems and manage computational 
                resources. Topics include specification and implementation of concurrency, process 
                scheduling, storage management, device handlers, and mechanisms for event coordination.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Fall 2022</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-P 465 &ensp; Software Engineering for Information Systems I</h3>
              <p>
                &ensp; Analysis design, and implementation of information systems. Project specification. 
                    Data modeling. Software design methodologies. Software quality assurance. Supervised team 
                    development of a real system for a real client.
              </p>
            </div>
            <div className="course">
              <h3>CSCI-C 335 &ensp; Computer Structures</h3>
              <p>
                &ensp; Structure and internal operation of computers. The architecture and assembly language 
                    programming of a specific computer are stressed, in addition to general principles of
                    hardware organization and low-level software systems.
              </p>
            </div>
          </div>
        </div>

        <h2>Spring 2022</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-B 403 &ensp; Introduction to Algorithm Design and Analysis</h3>
              <p>
                &ensp; Algorithm design methodology and General methods for analysis of algorithms and data
                    structures. Analysis of the performance of specific algorithms, such as those for searching and sorting.
              </p>
            </div>
            <div className="course">
              <h3>CSCI-B 365 &ensp; Data Mining and Analysis</h3>
              <p>
                &ensp; The course objective is to study computational aspects of discovering patterns and
                    relationships in large data. This course is designed to introduce fundamental concepts of data
                    mining and provide hands-on experience in data collection, preprocessing, analysis, clustering
                    and prediction.
              </p>
            </div>
          </div>
        </div>

        <h2>Fall 2021</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-B 461 &ensp; Database Concepts</h3>
              <p>
                &ensp; Introduction to database concepts and systems. Topics include database models and
                    systems; hierarchal, network, relational, and object-oriented; database design principles;
                    structures for efficient data access; query languages and processing; database applications
                    development; views; security; concurrency; recovery. Students participate in a project to
                    design, implement, and query a database using a standard database system.
              </p>
            </div>
            <div className="course">
              <h3>CSCI-C 323 &ensp; Mobile App Development (Android)</h3>
              <p>
                &ensp; This course focuses on development of mobile applications for modern platforms and
                    introduces common tools and languages used. The course will emphasize the app development cycle:
                    application design, development, testing, publishing and distribution; development tools and
                    emulators/simulators; user interface layout; using sensors including touch, geo-location and
                    orientation; and data management.
              </p>
            </div>
          </div>
        </div>

        <h2>Spring 2021</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-C 343 &ensp; Data Structures</h3>
              <p>
                &ensp; Systematic study of data structures encountered in computing problems, structure and use
                    of storage media, methods of representing structured data, and techniques for operating on data
                    structures.
              </p>
            </div>
            <div className="course">
              <h3>CSCI-C 322 &ensp; Object-Oriented Software Methods</h3>
              <p>
                &ensp; Design and implementation of complex software systems and applications exploiting the
                    object-oriented paradigm. Selection and effective utilization of object-oriented libraries and
                    interfaces.
              </p>
            </div>
          </div>
        </div>

        <h2>Fall 2020</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-A 291 &ensp; System Programming With C and Unix</h3>
              <p>
                &ensp; This course provides an introduction to programming in a Unix (Linux) environment using
                    the C language. The key ideas to be discussed are: the Unix shell, file system and basic shell
                    commands; the emacs text editor; and the C programming language.
              </p>
            </div>
            <div className="course">
              <h3>CSCI-A 290 &ensp; Javascript (Tools For Computing)</h3>
              <p>
                &ensp; Exploration of topics in computing. Common topics include REPL, Node.js, Express.js, and other tools
                    and frameworks commonly used with Javascript for web development. Lecutre only.&ensp;
              </p>
            </div>
            <div className="course">
              <h3>CSCI-C 241 &ensp; Discrete Structures For Computer Science</h3>
              <p>
                &ensp; Induction and recursive programs, running time, asymptotic notations, combinatorics and
                    discrete probability, trees and lists, the relational data model, graph algorithms,
                    propositional and predicate logic.
              </p>
            </div>
          </div>
        </div>

        <h2>Spring 2020</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-C 212 &ensp; Introduction to Software Systems</h3>
              <p>
                &ensp; Design of computer software systems and introduction to programming in the environment of
                    a contemporary operating system. Topics include a modern object-oriented programming language;
                    building and maintaining large projects; and understanding the operating system interface.
              </p>
            </div>
          </div>
        </div>

        <h2>Fall 2019</h2>
        <div className="semOuter">
          <div className="seminner">
            <div className="course">
              <h3>CSCI-C 211 &ensp; Introduction to Computer Science</h3>
              <p>
                &ensp; A first course in computer science for those intending to take advanced computer science
                    courses. Introduction to programming and to algorithm design and analysis. Using the Scheme
                    programming language, the course covers several programming paradigms. Lecture and laboratory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelevantCoursework;