import "./AboutUs.css";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

const AboutUs = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle("About Us | Dyno Book");
  }, []);

  return (
    <main className="container mt-16 mx-auto  px-4 ">
      <section>
        <div className="mb-7">
          <h1 className=" mb-3 text-2xl md:text-4xl lg:text-5xl font-semibold">
            What is Dyno Book ?
          </h1>
          <p className="text-justify xs:font-medium md:text-lg">
            Dyno Book comes form two different words - Dynamic and Book. Yeah!
            You have guessed it right. Dyno Book means dynamic book. But why do
            we call it dynamic or what made it dynamic? And why do we call this
            website - a book? Well, let's answer the second question first. The
            answer is quite simple. We provide all the types of question here
            that you get from books. But the difference is you need to buy the
            books for those questions and we provide those for free. And we made
            our website's UI (User Interface) so simple that you will feel; you
            are reading a book not browsing a website. I hope you have got your
            second question's answer. Now, let's explain the first question!
            Dynamic Book means you can edit your book as per your preferences.
            For example, By default you don't want to see the answers of any
            question; you can hide the answers of your book. You will get
            unlimited random questions to test yourself. You can filter your
            question as per your preference. Just think about can you filter
            your physical book. There are lots of cool features like these. You
            need to just explore the website for a while.
          </p>
        </div>
        <div>
          <h1 className="mb-3 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-semibold">
            Why Would I Use Dyno Book ?
          </h1>
          <p className="text-justify xs:font-medium md:text-lg">
            As we already said Dyno Book is completely free. You don't need to
            spend a single buck to use it, you don't need to get any
            subscription for it whereas you have to buy books from any book
            store. Even you don't need to create an account like other websites
            and it's easy to use. So, if you can read books here without buying
            and it's easy to use why you won't use Dyno Book. But These are not
            the only reason for using Dyno Book. The features of Dyno Book made
            itself awesome. Some current features and reason have been explained
            below -
          </p>
        </div>
      </section>
      <section className="my-10">
        <div className="mb-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>It's free and easy to use</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-justify">
                You don't need to send your money to use it. There is no premium
                content here. All the contents here are completely free for
                everybody. It's really easy to use, you will not face any
                trouble to it. We have tried to make it easy to navigate as much
                as possible. Most importantly you don't need to create any account
                to use it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mb-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Generate question paper</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-justify">
                Generating question paper is one of our best features. You can
                generate a question paper for a specific examination. The
                question will be random. You will not get the same question
                again and again. You can also filter question category to
                generate. For example - you select only grammar category and you
                will get a question paper base on grammar.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mb-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-justify">
                Question filtering is one of the strongest feature of Dyno Book.
                You will find almost all type of category to filter your
                question. For example you can filter by institution, academic
                year, subject, specific topic of any subject.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
