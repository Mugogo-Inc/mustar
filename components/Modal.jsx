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
      >
        <Fade in={open} className="rounded p-3 border-none ">
          <Box
            style={{}}
            sx={style}
            className="border-none rounded outline-none p-2"
          >
            <AiOutlineClose
              className=" absolute right-3 top-2 text-3xl"
              onClick={() => setOpen(!open)}
            />

            <Typography id="transition-modal-title" variant="h6" component="h2">
              {heading}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
            <Gallery data={data} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
