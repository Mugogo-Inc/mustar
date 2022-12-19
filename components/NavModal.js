import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import LinkTag from "./Link";

const NavModal = () => (
  <Dialog.Root type="multiple">
    <Dialog.Trigger asChild>
      <button className=" sm:hidden">
        <AiOutlineBars className="text-2xl" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-gray-200 fixed top-0  grid place-items-center overflow-y-auto" />
      <Dialog.Content className="DialogContent m-4 border z-40 shadow-2xl rounded-md ">
        <div
          className="block m-auto
         text-center text-3xl"
        >
          <div className="mb-4">
            <span className="">
              <LinkTag href="/ggg" className="block m-4">
                Contact
              </LinkTag>
            </span>
            <span className="pb-2">
              <LinkTag href="">Experiences</LinkTag>
            </span>
            <span className="pb-2">
              <LinkTag href="">Services</LinkTag>
            </span>
            <span className="">
              <LinkTag href="">About</LinkTag>
            </span>
          </div>
          <div className="mb-5 p-2 text-3xl">
            <Dialog.Close className="">
              <button aria-label="Close" className=" hover:shadow-2xl p-1 ">
                <AiOutlineClose className="hover:shadow-xl hover:z-30 rounded-md" />
              </button>
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default NavModal;
