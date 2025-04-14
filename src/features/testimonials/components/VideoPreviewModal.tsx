
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoPlayer } from "./VideoPlayer";
import { Testimonial } from "../constants/testimonials";

interface VideoPreviewModalProps {
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoPreviewModal({ testimonial, isOpen, onClose }: VideoPreviewModalProps) {
  if (!testimonial) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {testimonial.name} - {testimonial.company}
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          <VideoPlayer 
            videoUrl={testimonial.videoUrl} 
            poster={testimonial.thumbnail}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
