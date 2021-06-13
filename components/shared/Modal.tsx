import React from 'react';

type Props = {
    isVisible: boolean,
    children: React.ReactNode
};

export default function Modal({isVisible, children}: Props) {
    // const [visible, setVisible] = React.useState(isVisible);
    console.log('rerender modal');
    return (
        <div className={`w-auto h-auto overflow-hidden fixed top-0 right-0 left-0 bottom-0 text-center ${!isVisible && 'hidden'}`} style={{zIndex: 11}}>
            <div className="fixed" style={styles.modalOverlay}></div>
            <div className="shadow-md fixed" style={styles.modalContent}>
                {children}
            </div>

        </div>
    );
};

const styles = {
    modalContent: {
        width: "95%",
        height: "auto",
        minHeight: "500px",
        padding: 10,
        overflow: "hidden",
        maxWidth: "600px",
        maxHeight: "100vh",
        backgroundColor: "white",
        border: "1px solid lightgrey",
        zIndex: 13,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 7
    },
    modalOverlay: {
        left: 0,
        top: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 12,
        opacity: "30%",
    }
}