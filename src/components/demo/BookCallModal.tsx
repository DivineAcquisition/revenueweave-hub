import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface BookCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookCallModal = ({ open, onOpenChange }: BookCallModalProps) => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (open && !scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://app.iclosed.io/assets/widget.js";
      script.async = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-2 text-center">
          <DialogTitle className="text-2xl font-bold">
            🎉 Love What You See?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Book a 15-minute call to claim your branded booking system
          </DialogDescription>
        </DialogHeader>

        {/* Value Props */}
        <div className="px-6 pb-2">
          <p className="text-sm text-muted-foreground text-center mb-4">
            🏠 For Home Service Companies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="glass-purple rounded-lg p-4 text-center">
              <p className="text-lg mb-1">🎯</p>
              <p className="font-semibold text-sm mb-1">Optimized for Ad Traffic</p>
              <p className="text-xs text-muted-foreground">
                This booking interface works best when paired with your ad campaigns.
              </p>
            </div>
            <div className="glass-purple rounded-lg p-4 text-center">
              <p className="text-lg mb-1">📈</p>
              <p className="font-semibold text-sm mb-1">Proven Partner Results</p>
              <p className="text-xs text-muted-foreground">
                Our partners secure more sales by implementing a custom booking experience.
              </p>
            </div>
            <div className="glass-purple rounded-lg p-4 text-center">
              <p className="text-lg mb-1">🔄</p>
              <p className="font-semibold text-sm mb-1">Built-in Retention Systems</p>
              <p className="text-xs text-muted-foreground">
                Includes tools that prompt upsells and encourage recurring subscriptions.
              </p>
            </div>
          </div>
        </div>

        {/* iClosed Calendar Widget */}
        <div className="px-6 pb-4">
          <div
            className="iclosed-widget rounded-xl overflow-hidden"
            data-url="https://app.iclosed.io/e/divineacquisitionn/homeservice"
            title="Backend Conversion System"
            style={{ width: "100%", height: "550px" }}
          />
          <p className="text-xs text-muted-foreground text-center mt-3">
            No credit card required • Get set up in minutes • Full support included
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal;
