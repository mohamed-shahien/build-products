import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
interface Iprop {
    isOpen :boolean;
    closeModal: ()=> void;
    title?: string; 
    children: ReactNode;
}

export default function Modale({isOpen,closeModal,title,children}:Iprop) {

    return (
        <>
        {/* <div className="fixed inset-0 flex items-center justify-center">


                <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white"
                >
                Open dialog
                </button>

            
        </div> */}

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
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">


                    {title &&  <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        {title}
                    </Dialog.Title>}
                    

                    <div className="mt-4">
                        {children}
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        
        </>
    )
}
