import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface CalendarModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendarModal = ({ open, onOpenChange }: CalendarModalProps) => {
  useEffect(() => {
    // Load the iClosed widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://app.iclosed.io/assets/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-display font-bold text-center">
            Book Your Strategy Call
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4">
          <div 
            className="iclosed-widget rounded-xl overflow-hidden" 
            data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice" 
            title="Backend Conversion System" 
            style={{ width: "100%", height: "550px" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
