import "./AboutUs.css";
import React, { useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import teamMemberOne from '../../images/team-member-img-1.jpg';
import teamMemberTwo from '../../images/team-member-img-2.jpg';

const AboutUs = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle("About Us | Dyno Book")
  }, [])

  return (
    <main className="container mx-auto px-2">
      <section className="mt-4 sm:mt-8">
        <h1 className="mb-3 text-2xl font-semibold xs:font-bold sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
          What is Dyno Book ?
        </h1>

        <p className="text-justify text-sm xs:text-base md:text-md lg:text-lg 2xl:text-xl">
          Dyno Book comes form two different words - Dynamic and Book. Yeah! You have guessed it right. Dyno Book means dynamic book. But why do we call it dynamic or what made it dynamic? And why do we call this website - a book? Well, let's answer the second question first. The answer is quite simple. We provide all the types of question here that you get from books. But the difference is you need to buy the books for those questions and we provide those for free. And we made our website's UI (User Interface) so simple that you will feel; you are reading a book not browsing a website. I hope you have got your second question's answer. Now, let's explain the first question! Dynamic Book means you can edit your book as per your preferences. For example, By default you don't want to see the answers of any question; you can hide the answers of your book. You will get unlimited random questions to test yourself. You can filter your question as per your preference. Just think about can you filter your physical book. There are lots of cool features like these. You need to just explore the website for a while.
        </p>
      </section>

      <section className="mt-10 sm:mt-14">
        <h1 className="mb-3 text-2xl font-semibold xs:font-bold sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl 2xl:text-6xl">
          Why Would I Use Dyno Book ?
        </h1>

        <p className="text-justify text-sm xs:text-base md:text-md lg:text-lg 2xl:text-xl">
          As we already said Dyno Book is completely free. You don't need to spend a single buck to use it, you don't need to get any
          subscription for it whereas you have to buy books from any book store. Even you don't need to create an account like other websites and it's easy to use. So, if you can read books here without buying and it's easy to use why you won't use Dyno Book. But These are not the only reason for using Dyno Book. The features of Dyno Book made itself awesome. Some current features and reason have been explained below -
        </p>
      </section>

      <section className="mt-10">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className="md:font-semibold lg:text-lg xl:text-xl">It's free and easy to use</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-justify text-sm md:text-base">
              You don't need to send your money to use it. There is no premium content here. All the contents here are completely free for everybody. It's really easy to use, you will not face any trouble with it. We have tried to make it easy to navigate as much as possible. Most importantly you don't need to create any account to use it.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className="md:font-semibold lg:text-lg xl:text-xl">Generate question paper</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-justify text-sm md:text-base">
              Generating question paper is one of our best features. You can generate a question paper for a specific examination. The question will be random. You will not get the same question again and again. You can also filter question categories to generate. For example - you have selected only the grammar category and you will get a question paper based on grammar.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className="md:font-semibold lg:text-lg xl:text-xl">Question filtering</h4>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-justify text-sm md:text-base">
              Question filtering is one of the strongest features of Dyno Book. You will find almost all types of categories to filter your question. For example, you can filter by institution, academic year, subject, a specific topic of any subject.
            </p>
          </AccordionDetails>
        </Accordion>
      </section>

      <section className="my-10">

      </section>
    </main>
  );
};

export default AboutUs;
