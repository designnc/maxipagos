const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Círculo Primary */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] 
        bg-primary rounded-full blur-[80px] md:blur-[100px] lg:blur-[150px] 
        opacity-50 -top-10 -left-10"></div>
      
      {/* Círculo Secondary */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]
        bg-secondary rounded-full blur-[100px] md:blur-[150px] lg:blur-[200px]
        opacity-50 bottom-10 right-10"></div>
    </div>
  );
};

export default Background;
