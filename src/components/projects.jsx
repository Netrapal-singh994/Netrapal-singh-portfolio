import Image from "next/image"; 

export default function Projects() {
  return (
     <section className="py-16  bg-[#1A1C2B] container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Awesome Portfolio</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder project items */}
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="bg-[#24263A] rounded-lg shadow overflow-hidden">
              <Image src={`/assets/images/portfolio-${i}.jpg`} alt={`Project ${i}`} width={400} height={300} className="w-full" />
            </div>
          ))}
        </div>
      </section>
  );
}
