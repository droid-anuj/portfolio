export default function Resume(){
    return (
        <div className="flex jsutify-center items-center h-screen">
            <iframe
            src="/resume.pdf"
            width="100%"
            height="100%"
            className="border rounded-lg shadow-lg"
            />
        </div>
    );

}