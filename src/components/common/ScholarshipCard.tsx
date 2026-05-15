import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { CalendarDays, GraduationCap } from "lucide-react";

export interface ScholarshipCardProps {
  title: string;
  amount: string;
  provider?: string;
  date?: string;
  className?: string;
}

export default function ScholarshipCard({
  title,
  amount,
  provider,
  date,
  className,
}: ScholarshipCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19]/90 shadow-2xl backdrop-blur-xl",
        className,
      )}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-80" />

      {/* Cover Image */}
      <div className="relative h-100 w-full overflow-hidden">
        <Image
          src="/hocbong2425.jpg"
          alt="Scholarship"
          fill
          priority
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />

        {/* Logo */}
        <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
          <div className="flex size-12 items-center justify-center rounded-xl bg-white/10">
            <Image
              alt="PTIT Logo"
              src="/PTIT_logo_2.jpeg"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Scholarship
            </p>
            <p className="font-semibold text-white">PTIT Academic Award</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-7 pb-7 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold leading-tight text-white">
              {title}
            </h3>

            <p className="mt-3 text-3xl font-black tracking-tight text-primary">
              {amount}
            </p>
          </div>

          <div className="hidden rounded-2xl border border-primary/20 bg-primary/10 p-3 md:flex">
            <GraduationCap className="size-7 text-primary" />
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {provider && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Provider
              </p>
              <p className="mt-1 font-medium text-white">{provider}</p>
            </div>
          )}

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Receiver
            </p>
            <p className="mt-1 font-medium text-white">
              N24DCCN167 - LE MINH THIEN
            </p>
          </div>

          {date && (
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:col-span-2">
              <CalendarDays className="size-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Award Date
                </p>
                <p className="mt-1 font-medium text-white">{date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
