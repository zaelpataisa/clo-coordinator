import IconSelect from "./Icons";

interface ButtonProps {
    url: string;
}

const ButtonUrl = ({ url }: ButtonProps) => {

    return (
        <>
            <a
                href={url}
                className="bg-transparent p-1.5 text-[1.25rem] text-[var(--colors-03)] border-3 border-[var(--colors-03)] rounded-md"
            >
                <IconSelect iconCode={'FaExternalLinkAlt'} />
            </a>
        </>
    );
}

export default ButtonUrl;
