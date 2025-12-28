import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Swipe support
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
        if (isRightSwipe) {
            setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }
    };

    const images = [
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/IMG-20251227-WA0012.jpg?raw=true",
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/IMG-20251227-WA0017.jpg?raw=true",
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/IMG-20251227-WA0025.jpg?raw=true",
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/IMG-20251227-WA0022.jpg?raw=true",
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/IMG-20251227-WA0019.jpg?raw=true",
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/WhatsApp%20Image%202025-12-27%20at%2021.37.56_03bf70b1.jpg?raw=true",
        "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/pp2.jpg?raw=true", "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/ppp.jpg?raw=true", "https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/pppp.jpg?raw=true"
    ];

    const handleNext = useCallback((e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const handlePrev = useCallback((e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleKeyDown = useCallback((e) => {
        if (selectedIndex === null) return;
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') setSelectedIndex(null);
    }, [selectedIndex, handleNext, handlePrev]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex]);

    return (
        <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">

                    <h2 className="inline-block px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xl font-bold text-gray-900 dark:text-white uppercase tracking-widest opacity-80 mb-2">
                        Gallery
                    </h2>
                    <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent my-4">
                        Moment Capture
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="aspect-video overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] group relative"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img
                                src={`${src}`}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm touch-none"
                    onClick={() => setSelectedIndex(null)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <button
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-[101]"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-[101]"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                    >
                        <ChevronLeft size={40} className="md:w-12 md:h-12" />
                    </button>

                    <button
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-[101]"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                    >
                        <ChevronRight size={40} className="md:w-12 md:h-12" />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`${images[selectedIndex]}`}
                            alt={`Gallery view ${selectedIndex + 1}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-fade-in select-none"
                            draggable="false"
                        />
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 bg-black/50 px-4 py-2 rounded-full text-sm">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
