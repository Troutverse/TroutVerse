'use client';

import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

interface ProjectCardProps {
  title: string;
}

export default function ProjectCard({ title }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="border p-6 rounded-md shadow hover:shadow-lg cursor-pointer bg-white transition"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Project Modal"
        className="max-w-lg mx-auto mt-24 bg-white p-6 rounded-md shadow"
        overlayClassName="fixed inset-0 backdrop-blur-md bg-white/10 flex justify-center items-start z-50"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">이곳에 슬라이드나 상세 내용을 추가할 수 있습니다.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 text-blue-500 hover:underline"
        >
          닫기
        </button>
      </Modal>
    </>
  );
}
