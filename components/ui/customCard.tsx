import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import Image from "next/image";

interface CustomCardProps {
    className?: string;
    title: string;
    desc: string;
    img: string;
    alt: string;
}

const handleOnMouseMove = (e: MouseEvent) => {
    console.log(e);
}

export default function CustomCard({className, title, desc, img, alt} : CustomCardProps) {
    return (
        <Card className={`${className ? className : "bg-slate-900 border-slate-700 flex flex-row"} hover:bg-slate-800 transition-all duration-150`}>
            <CardHeader className="w-[80%]">
                <CardTitle className={`text-slate-300 ${title.length < 20 ? "text-xl" : "text-lg"}`}>{title}</CardTitle>
                <CardDescription className="text-slate-400 text-base">{desc}</CardDescription>
            </CardHeader>
            <img className="object-cover overflow-hidden rounded-r-xl w-96" src={img}/>
        </Card>
    );
}
