import { FC } from "react";

export enum PageSectionType {
    inherit,
    normal,
    dark
}
type PageSectionProps = {
    children?: React.ReactNode,
    type?: PageSectionType,
    title?: string,
    subtitle?: string
}
const PageSection: FC<PageSectionProps> = (props: PageSectionProps) => {
    //Determine Styling based on type
    let bgColorClass = "";//default type will inherit parent styling
    let titleColorClass = "";
    let textColorClass = "";

    if (props.type === PageSectionType.normal) {
        bgColorClass = "bg-white dark:bg-black";
        titleColorClass = "text-positive-dark dark:text-positive-light";
        textColorClass = "text-black dark:text-white";
    } else if (props.type === PageSectionType.dark) {
        bgColorClass = "bg-gray-dark";
        titleColorClass = "text-gray";
        textColorClass = "text-white";
    }

    return (
        <div className={`${bgColorClass} border-b-2 border-b-gray-light py-14`}>
            <div className={`${titleColorClass}`}>
                <h1 className="text-center text-5xl font-bold">
                    {props.title}
                </h1>
                <br/>
                <h4 className="text-center text-xl font-semibold">{props.subtitle}</h4>
            </div>
            <br/>
            <br/>
            <div className={`${textColorClass}`}>
                {props.children}
            </div>
        </div>
    )
}

export default PageSection;