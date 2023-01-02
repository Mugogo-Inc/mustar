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

export default function TransitionsModal(props) {
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
          {props.heading}{" "}
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
              {props.heading}
            </Typography>

            <Gallery data={props.data} />
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 2,
                display: "block",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <h2 className="text-bold text-4xl m-2">{props.subheading}</h2>
              <p className="text-lg">
                {props.paragraph1} <br /> <br /> {props.paragraph2} <br />{" "}
                <br /> {props.paragraph3} <br /> <br />
                <ul className="list-disc">
                  <li>{props.info1}</li>
                  <li>{props.info2}</li>
                  <li>{props.info3}</li>
                </ul>
                <br />
                <br />
                <p>
                  <h1 className="text-2xl">Included</h1>
                  <ul className="list-disc">
                    <li>{props.included1}</li> <li>{props.included2}</li>{" "}
                    <li> {props.included3} </li> <li>{props.included4}</li>
                    <li>{props.included5}</li>
                    <li>{props.included6}</li>
                  </ul>
                </p>
                <div className="my-4">
                  <h1 className="text-2xl font-bold mb-4">What to Expect</h1>
                  <p>{props.expect}</p>
                </div>
                <div className="my-4">
                  <h1 className="text-2xl my-2 font-bold">Additional Info </h1>
                  <p>
                    <ul className="list-disc">
                      <li> {props.additionalinfo1}</li>
                      <li>{props.additionalinfo2}</li>
                      <li> {props.additionalinfo3} </li>
                      <li> {props.additionalinfo4}</li>
                      <li>{props.additionalinfo5}</li>
                      <li> {props.additionalinfo6}</li>
                      <li> {props.additionalinfo7}</li>
                    </ul>
                  </p>
                </div>
                <div className="my-4">
                  <h1 className="text-2xl font-bold">FAQS</h1>
                  <p>
                    The answers provided below are based on answers previously
                    given by the tour provider to customer’s questions
                  </p>
                  <p className="p-2">{props.FAQ}</p>
                  <br />
                  <p className="font-semibold ">{props.FAQanswer}</p>
                </div>
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
