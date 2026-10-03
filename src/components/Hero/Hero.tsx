"use client"
import { heroSlides } from "@/data/heroData"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";



export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide = heroSlides[currentSlide];
    const nextSlide = () => {
        setCurrentSlide((item) =>
            item === heroSlides.length - 1 ? 0 : item + 1
        )
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((item) =>
                item === heroSlides.length - 1 ? 0 : item + 1
            )
        }, 5000);

        return () => {
            clearInterval(timer)
        };
    }, []);
    const prevSlide = () => {
        setCurrentSlide((item) =>
            item === 0 ? heroSlides.length - 1 : item - 1
        )
    }
    return (
        <section className="min-h-150 flex items-center">
            <div className="max-w-7xl w-full mx-auto px-5">
                <div 
                key={slide.id}
                 className="grid md:grid-cols-2 gap-10 items-center hero-slide"
                 >
                    <div className="">
                        <p className="text-blue-600 font-semibold mb-3">
                            {slide.smallTitle}
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            {slide.title}{" "}
                            <span className="text-blue-600">{slide.highlightTitle}</span>
                        </h1>
                        <p className="text-gray-600 mt-5 text-lg">
                            {slide.description}
                        </p>
                        <div className="mt-7 gap-5 flex">
                            <Link
                            href="/appointment"
                            className="inline-flex justify-center items-center bg-blue-600 text-white rounded-lg px-6 py-3">
                                Book Appointment
                                </Link>
                            <Link
                            href="/doctors"
                            className="inline-flex justify-center items-center border border-blue-600 text-blue-600 rounded-lg px-6 py-3 hover:bg-blue-600 hover:text-white transition">
                                Our Doctors
                                </Link>
                        </div>
                    </div>
                    <div className="relative overflow-hidden h-80 md:h-112.5 rounded-3xl bg-gray-300 flex items-center justify-center">
                        <Image
                            src={slide.image}
                            alt={slide.smallTitle}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="mt-8 flex gap-3">
                    <button className="border text-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:border-gray-500 hover:text-gray-500"
                        onClick={prevSlide}
                    >
                        ←
                    </button>
                    <button className="border text-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:border-gray-500 hover:text-gray-500"
                        onClick={nextSlide}>
                        →
                    </button>
                </div>
                <div className="mt-4 flex gap-2">
                    {heroSlides.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 rounded-full cursor-pointer
                        ${currentSlide === index ? "w-7 bg-blue-600" : "w-3 bg-gray-300"}
                        `}

                        ></button>
                    ))}
                </div>
            </div>
        </section>
    )
}