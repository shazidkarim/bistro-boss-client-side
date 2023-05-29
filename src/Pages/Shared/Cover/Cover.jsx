import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
        blur={{ min: -5, max: 5 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="hero h-[600px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full bg-[#151515] p-12 bg-opacity-40">
                    <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
                    <h3 className="mb-5 px-36 text-3xl">Would you like to try a dish?</h3>
                </div>
            </div>
        </div>
    </Parallax>
      
    );
};

export default Cover;