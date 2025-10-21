// app/home/team/page.tsx
"use client";
import Image from "next/image";
import CEO from "../../../public/assets/ceo_rana.jpg";

const team = [
  {
    name: "Mohammad Rana",
    title: "Founder & CEO",
    image: CEO,
  },
  {
    name: "Jakie Hossain",
    title: "CTO",
    image: CEO,
  },
  {
    name: "Ahmed Akil",
    title: "Marketing Head",
    image: CEO,
  },
];

export default function TeamPage() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Creative Team
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
