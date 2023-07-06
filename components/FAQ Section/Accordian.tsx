import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

function Accordian({}: Props) {
  return (
    <Accordion type="single" className="mt-5 lg:max-w-lg" collapsible>
      <AccordionItem className="" value="item-1">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
