import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiOutlineClose } from "react-icons/ai";

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

export default function TransitionsModal({ heading }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="text-orange-600 text-md">
        {heading}
      </Button>
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
        <Fade in={open}>
          <Box sx={style} className=" border-none outline-none ">
            <AiOutlineClose
              className=" absolute right-3 top-2 text-3xl"
              onClick={() => setOpen(!open)}
            />

            <Typography id="transition-modal-title" variant="h6" component="h2">
              {heading}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              natus a consectetur ea quis tenetur atque alias adipisci iure
              iusto, sit voluptatibus sunt aspernatur delectus eos velit amet
              placeat eligendi?
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
