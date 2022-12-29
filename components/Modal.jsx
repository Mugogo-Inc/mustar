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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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
          overflow: "scroll",

          outline: "none",
        }}
        className="border-none outline-none"
      >
        <Fade in={open} className="rounded p-3 border-none ">
          <Box
            style={{}}
            sx={{ ...style, border: "none", borderRadius: "4px" }}
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
                </p>
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
