import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Gallery from "./Gallery";
import ModalGallery from "./ModalGallery";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";

export default function MyModal({
  data,

  paragraphs,
  info,
  included,
  expect,
  additional,
  tour,
  gallery,
  modalBtn,
}) {
  const router = useRouter();
  const { locale } = router;

  const t =
    locale === "en"
      ? en
      : locale === "de"
      ? de
      : locale === "fr"
      ? fr
      : locale === en;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const settings = {
    dots: true,
    slidesToShow: 2,
  };
  return (
    <>
      <div className="relative centered inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="absolute centered rounded px-4 py-2 w-44 font-bold  border border-white bg-opacity-20  text-lg text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
          {modalBtn}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto block m-auto text-center">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" font-medium leading-6 text-gray-900 block p-3  text-3xl m-auto text-center"
                  >
                    {modalBtn}
                  </Dialog.Title>
                  <div className="mt-2  inset-0 ">
                    <div className="text-lg text-gray-500 overflow-y-auto">
                      <Gallery data={data} />
                      <h1 className="text-3xl font-semibold p-3 block m-auto text-center">
                        {t.heading.overview}
                      </h1>
                      {paragraphs?.map((paragraph, index) => (
                        <div key={index}>
                          <p className="text-xl block m-auto text-center ">
                            {paragraph}
                          </p>{" "}
                          <br />
                        </div>
                      ))}

                      <ul className="list-disc block m-auto text-center p-6">
                        <h1 className="text-3xl font-semibold py-3">
                          {t.heading.tours}
                        </h1>
                        {info?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      <div className="block m-auto text-center">
                        {included && (
                          <h1 className="text-3xl font-semibold py-2">
                            {t.heading.included}
                          </h1>
                        )}
                        <ul className="list-disc p-5">
                          {included?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="block m-auto text-center ">
                        <h1 className="text-3xl font-bold p-3">
                          More Photos of {tour} Tour
                        </h1>
                        <ModalGallery data={gallery} />
                      </div>
                      <div className="block m-auto text-center p-3">
                        {expect && (
                          <h1 className="text-3xl font-semibold py-2">
                            {t.heading.expect}
                          </h1>
                        )}

                        {expect?.map((item, index) => (
                          <p key={index}>
                            {item} <br /> <br />
                          </p>
                        ))}
                      </div>
                      <div className="block m-auto text-center p-3">
                        {additional && (
                          <h1 className="text-3xl font-semibold py-2">
                            {t.heading.additional}
                          </h1>
                        )}
                        <ul className="list-disc p-5">
                          {additional?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="block m-auto text-center p-3">
                        <h1 className="text-3xl font-semibold py-2">
                          {t.heading.FAQ}
                        </h1>
                        <p>
                          <span>{t.FAQ.infoProvided}</span>
                          <span>
                            <br /> <br />
                            {t.FAQ.question}
                          </span>
                          <br /> <br />
                          <span>{t.FAQ.answer}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex  absolute right-2 top-2 justify-center rounded-md border border-transparent bg-blue-100  text-sm font-medium text-gray-900 p-1 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
