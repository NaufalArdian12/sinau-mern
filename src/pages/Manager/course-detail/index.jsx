import React from 'react'
import { Link } from 'react-router-dom';

export default function ManagerCourseDetailPage() {
  return (
    <>
      <div id="Breadcrumb" className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5">
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Dashboard</span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Manage Course</span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Details</span>
            </div>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Mastering React TypeScript 7 <br/>
                        Website Development
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                        Edit Course
                    </Link>
                    <Link to="course-learning-video.html" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Preview
                    </Link>
                </div>
            </header>
            <section id="CourseInfo" className="flex gap-[50px]">
                <div id="Thumbnail" className="flex shrink-0 w-[480px] h-[250px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img src="/assets/images/thumbnails/th-4.png" className="w-full h-full object-cover" alt="thumbnail" />
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                        <img src="/assets/images/icons/profile-2user-purple.svg" className="w-8 h-8" alt="icon" />
                        <p className="font-semibold">12,489 Students</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                        <img src="/assets/images/icons/crown-purple.svg" className="w-8 h-8" alt="icon" />
                        <p className="font-semibold">Programming</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                        <img src="/assets/images/icons/note-favorite-purple.svg" className="w-8 h-8" alt="icon" />
                        <p className="font-semibold">873 Contents</p>
                    </div>
                    <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                        <img src="/assets/images/icons/cup-purple.svg" className="w-8 h-8" alt="icon" />
                        <p className="font-semibold">Certificate</p>
                    </div>
                </div>
            </section>
            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="header flex items-center justify-between">
                    <h2 className="font-bold text-[22px] leading-[33px]">Course Content</h2>
                    <Link to="add-course-content.html" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Add Content
                    </Link>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="relative flex shrink-0 w-[140px] h-[110px] ">
                        <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                            <span className="font-bold text-sm leading-[21px]">1</span>
                        </p>
                        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/cover-video.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Install VSCode di Windows</h3>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon" />
                                <p className="text-[#838C9D]">Video Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                            Edit Content
                        </Link>
                        <button type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="relative flex shrink-0 w-[140px] h-[110px] ">
                        <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                            <span className="font-bold text-sm leading-[21px]">2</span>
                        </p>
                        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/cover-text.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Panduan Fundamental</h3>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon" />
                                <p className="text-[#838C9D]">Text Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                            Edit Content
                        </Link>
                        <button type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="relative flex shrink-0 w-[140px] h-[110px] ">
                        <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                            <span className="font-bold text-sm leading-[21px]">3</span>
                        </p>
                        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/cover-text.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Panduan Fundamental</h3>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon" />
                                <p className="text-[#838C9D]">Text Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                            Edit Content
                        </Link>
                        <button type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="relative flex shrink-0 w-[140px] h-[110px] ">
                        <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                            <span className="font-bold text-sm leading-[21px]">4</span>
                        </p>
                        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/cover-video.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Install VSCode di Windows</h3>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon" />
                                <p className="text-[#838C9D]">Video Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                            Edit Content
                        </Link>
                        <button type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="relative flex shrink-0 w-[140px] h-[110px] ">
                        <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                            <span className="font-bold text-sm leading-[21px]">5</span>
                        </p>
                        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/cover-video.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">Install VSCode di Windows</h3>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon" />
                                <p className="text-[#838C9D]">Video Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                            Edit Content
                        </Link>
                        <button type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                    </div>
                </div>
                <div id="Pagination" className="flex items-center gap-3">
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white">
                        <span className="font-semibold text-sm leading-[21px]">1</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">2</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">3</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">4</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">5</span>
                    </button>
                </div>
            </section>
    </>
  )
}
