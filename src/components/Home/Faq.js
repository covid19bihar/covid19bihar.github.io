import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../HeaderFooter/Footer";

const Faq = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center mt-4 mb-3">
            <h3 className="mb-0">COMMON </h3>
            <h3>QUESTION & ANSWER</h3>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h5>Q1. What is a novel coronavirus?</h5>
            <p>
              On February 11, 2020 the World Health Organization announced an
              official name for the disease that is causing the 2019 novel
              coronavirus outbreak, first identified in Wuhan China. The new
              name of this disease is coronavirus disease 2019, abbreviated as
              COVID-19. In COVID-19, ‘COʼ stands for ‘corona,ʼ ‘VIʼ for ‘virus,ʼ
              and ‘Dʼ for disease. Formerly, this disease was referred to as
              “2019 novel coronavirus” or “2019-nCoV”. A novel coronavirus is a
              new coronavirus that has not been previously identified. The virus
              causing coronavirus disease 2019 (COVID-19), and cause mild
              illness, like the common cold.
            </p>

            <h5>Q2. What is the source of the virus?</h5>
            <p>
              Coronaviruses are a large family of viruses. Some cause illness in
              people, and others, such as canine and feline coronaviruses, only
              infect animals. Rarely, animal coronaviruses that infect animals
              have emerged to infect people and can spread between people. This
              is suspected to have occurred for the virus that causes COVID-19.
              Middle East Respiratory Syndrome (MERS) and Severe Acute
              Respiratory Syndrome (SARS) are two other examples of
              coronaviruses that originated from animals and then spread to
              people. More information about the source and spread of COVID-19
              is available on the Austrlain Govt Heath Website.
            </p>

            <h5>Q3. How does the virus spread?</h5>
            <p>
              This virus was first detected in Wuhan City, Hubei Province,
              China. The first infections were linked to a live animal market,
              but the virus is now spreading from person-to-person. Itʼs
              important to note that person-to-person spread can happen on a
              continuum. Some viruses are highly contagious (like measles),
              while other viruses are less so.The virus that causes COVID-19
              seems to be spreading easily and sustainably in the community
              (“community spread”) in some affected geographic areas. Community
              spread means people have been infected with the virus in an area,
              including some who are not sure how or where they became infected.
            </p>

            <h5>
              Q4. Can someone who has had COVID-19 spread the illness to others?
            </h5>
            <p>
              The virus that causes COVID-19 is spreading person-to-person.
              Someone who is actively sick with COVID-19 can spread the illness
              to others. That is why Australian Govt recommends that these
              patients be isolated either in the hospital or at home Please
              visit the link for more Information about isolation{" "}
              <a
                href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/self-isolation-self-quarantine-for-coronavirus-covid-19"
                target="_balck"
              >
                Link
              </a>{" "}
              (depending on how sick they are) until they are better and no
              longer pose a risk of infecting others.
            </p>

            <h5>Q5. Will warm weather stop the outbreak of COVID-19?</h5>
            <p>
              It is not yet known whether weather and temperature impact the
              spread of COVID-19. Some other viruses, like the common cold and
              flu, spread more during cold weather months but that does not mean
              it is impossible to become sick with these viruses during other
              months. At this time, it is not known whether the spread of
              COVID-19 will decrease when weather becomes warmer. There is much
              more to learn about the transmissibility, severity, and other
              features associated with COVID-19 and investigations are ongoing.
            </p>

            <h5>Q6. What is community spread?</h5>
            <p>
              Community spread means people have been infected with the virus in
              an area, including some who are not sure how or where they became
              infected.
            </p>

            <h5>
              Q7. COVID-19 virus can be transmitted in areas with hot and humid
              climates?
            </h5>
            <p>
              From the evidence so far, the COVID-19 virus can be transmitted in
              ALL AREAS, including areas with hot and humid weather. Regardless
              of climate, adopt protective measures if you live in, or travel to
              an area reporting COVID-19. The best way to protect yourself
              against COVID-19 is by frequently cleaning your hands. By doing
              this you eliminate viruses that may be on your hands and avoid
              infection that could occur by then touching your eyes, mouth, and
              nose.
            </p>
            <h5>Q8. Cold weather and snow CANNOT kill the new coronavirus</h5>
            <p>
              There is no reason to believe that cold weather can kill the new
              coronavirus or other diseases. The normal human body temperature
              remains around 36.5°C to 37°C, regardless of the external
              temperature or weather. The most effective way to protect yourself
              against the new coronavirus is by frequently cleaning your hands
              with alcohol-based hand rub or washing them with soap and water.
            </p>

            <h5>
              Q9. Can an ultraviolet disinfection lamp kill the new coronavirus?
            </h5>
            <p>
              UV lamps should not be used to sterilize hands or other areas of
              skin as UV radiation can cause skin irritation.
            </p>

            <h5>
              Q10. Do vaccines against pneumonia protect you against the new
              coronavirus?{" "}
            </h5>
            <p>
              No. Vaccines against pneumonia, such as pneumococcal vaccine and
              Haemophilus influenza type B (Hib) vaccine, do not provide
              protection against the new coronavirus. The virus is so new and
              different that it needs its own vaccine. Researchers are trying to
              develop a vaccine against 2019-nCoV, and WHO is supporting their
              efforts. Although these vaccines are not effective against
              2019-nCoV, vaccination against respiratory illnesses is highly
              recommended to protect your health.
            </p>
          </Col>
        </Row>

      </Container>
      <Footer />
    </>
  );
};

export default Faq;
