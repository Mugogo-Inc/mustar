import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { AiOutlineClose } from "react-icons/ai";
import { TfiAngleRight } from "react-icons/tfi";
import Gallery from "./Gallery";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  marginTop: 5,

  p: 4,
};

export default function TransitionsModal({ heading, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <div className=" inline-block">
        <button
          onClick={handleOpen}
          className="text-white text-base p-2 font-semibold sm:p-2 m-3  border border-white  items-center  block button-animation rounded "
        >
          {heading}{" "}
          <i className="text-orange-500 font-bold">
            {" "}
            <TfiAngleRight
              className="inline font-bold text"
              style={{ fontWeight: "500" }}
            />
          </i>
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          outline: "none",
          marginBottom: 7,
          width: "fit",
        }}
        className="border-none outline-none"
      >
        <Fade in={open} className="rounded p-3 border-none ">
          <Box
            style={{}}
            sx={{
              ...style,
              border: "none",
              borderRadius: "4px",
              overflow: "scroll",
            }}
          >
            <AiOutlineClose
              className=" absolute right-3 top-2 text-3xl"
              onClick={() => setOpen(!open)}
            />

            <Typography id="transition-modal-title" variant="h6" component="h2">
              {heading}
            </Typography>

            <Gallery data={data} />
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 2,
                display: "block",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <h2 className="text-bold text-4xl m-2">Overview</h2>
              <p className="text-lg">
                Nakupenda Beach (In Swahili, means I love you) it is a half day
                tour that start from seafront local port of stone town to prison
                island, from prison island to Nakupenda Sand Bank, around 20
                minutes local boat ride from stone town. <br /> <br /> Nakupenda
                is the most beautiful beach in Zanzibar islands, the beaches has
                clear blue water and pure white sands beach. The water are
                suitable for swimming and snorkeling, in case you visit in the
                morning you may see dolphin roaming around the water. <br />{" "}
                <br /> Nakupenda island beach is located in Unguja island close
                to stone town. The environment of nakupenda islands is very
                exotic and natural. During this tour, the travelers would be
                able to taste all seasonal fruits available in Zanzibar, taste
                the Swahili Arabian cuisine and drinks. <br /> <br />
                <ul className="list-disc">
                  <li>Local wooden boat will be used for the tour</li>
                  <li>Swimming and snorkeling</li>
                  <li>Fresh tropical fruits at the sandbank</li>
                </ul>
                <br />
                <br />
                <p>
                  <h1 className="text-2xl">Included</h1>
                  <ul className="list-disc">
                    <li> Hotel pickup and drop off</li>{" "}
                    <li>All taxes, fees and handling charges</li>{" "}
                    <li>Mixed sea food lunch`</li>{" "}
                    <li> Soft drinks and fresh fruits </li>{" "}
                    <li>Snorkeling equipment</li>
                    <li>Experienced professional tour guide</li>
                  </ul>
                </p>
                <div className="my-4">
                  <h1 className="text-2xl font-bold mb-4">What to Expect</h1>
                  <p>
                    It’s a half day tour The underwater world at Nakupenda is
                    unbelievably spectacular. There are countless colorful
                    fishes and other sea creatures that survive among the coral
                    reefs and underwater plants which together form the barrier
                    reef ecosystem. The travelers will have also opportunity to
                    enjoy wonderful weather from the beach, snorkeling, and even
                    get fresh fruits like bananas, pineapples, watermelon,
                    mangoes, and other fruits. Also soft drinks and Swahili food
                    will be available during the tour.
                  </p>
                </div>
                <div className="my-4">
                  <h1 className="text-2xl my-2 font-bold">Additional Info </h1>
                  <p>
                    <ul className="list-disc">
                      <li>
                        {" "}
                        Confirmation will be received at time of booking Child
                      </li>
                      <li>
                        Rate ate applies only when sharing with 2 paying adults
                      </li>
                      <li> Not wheelchair accessible </li>
                      <li> Most travelers can participate</li>
                      <li>
                        This is a private tour /activity. Only your group will
                        participate.
                      </li>
                      <li> $72 per adult price varies by group size</li>
                      <li> Age requirement is 5-99 years old.</li>
                    </ul>
                  </p>
                </div>
                <div className="my-4">
                  <h1 className="text-2xl font-bold">FAQS</h1>
                  <p>
                    The answers provided below are based on answers previously
                    given by the tour provider to customer’s questions
                    <span className="p-4">
                      Q: What is the policy on sanitization during Nakupenda
                      tour?
                    </span>
                    <br />
                    <span className="font-semibold ">
                      A: The policies on sanitization are: Hand sanitizer
                      available to travelers and staff transportation vehicles
                      regularly sanitized.
                    </span>
                  </p>
                </div>
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
