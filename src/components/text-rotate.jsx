"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

// Fungsi utama
const TextRotate = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...restProps
  } = props

  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const splitIntoCharacters = (text) => {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" })
      return Array.from(segmenter.segment(text), ({ segment }) => segment)
    }
    return Array.from(text)
  }

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex]
    if (splitBy === "characters") {
      const text = currentText.split(" ")
      return text.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== text.length - 1,
      }))
    }
    return splitBy === "words"
      ? currentText.split(" ")
      : splitBy === "lines"
      ? currentText.split("\n")
      : currentText.split(splitBy)
  }, [texts, currentTextIndex, splitBy])

  const getStaggerDelay = useCallback(
    (index, totalChars) => {
      const total = totalChars
      if (staggerFrom === "first") return index * staggerDuration
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2)
        return Math.abs(center - index) * staggerDuration
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total)
        return Math.abs(randomIndex - index) * staggerDuration
      }
      return Math.abs(staggerFrom - index) * staggerDuration
    },
    [staggerFrom, staggerDuration]
  )

  const handleIndexChange = useCallback(
    (newIndex) => {
      setCurrentTextIndex(newIndex)
      if (onNext) onNext(newIndex)
    },
    [onNext]
  )

  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop
          ? 0
          : currentTextIndex
        : currentTextIndex + 1

    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex)
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange])

  const previous = useCallback(() => {
    const prevIndex =
      currentTextIndex === 0
        ? loop
          ? texts.length - 1
          : currentTextIndex
        : currentTextIndex - 1

    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex)
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange])

  const jumpTo = useCallback(
    (index) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1))
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex)
      }
    },
    [texts.length, currentTextIndex, handleIndexChange]
  )

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0)
    }
  }, [currentTextIndex, handleIndexChange])

  useImperativeHandle(ref, () => ({
    next,
    previous,
    jumpTo,
    reset,
  }), [next, previous, jumpTo, reset])

  useEffect(() => {
    if (!auto) return
    const intervalId = setInterval(next, rotationInterval)
    return () => clearInterval(intervalId)
  }, [next, rotationInterval, auto])

  return (
    <motion.span
      className={cn("flex flex-wrap whitespace-pre-wrap", mainClassName)}
      {...restProps}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>

      <AnimatePresence
        mode={animatePresenceMode}
        initial={animatePresenceInitial}
      >
        <motion.div
          key={currentTextIndex}
          className={cn(
            "flex flex-wrap",
            splitBy === "lines" && "flex-col w-full"
          )}
          layout
          aria-hidden="true"
        >
          {(splitBy === "characters"
            ? elements
            : elements.map((el, i) => ({
                characters: [el],
                needsSpace: i !== elements.length - 1,
              }))
          ).map((wordObj, wordIndex, array) => {
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0)

            return (
              <span
                key={wordIndex}
                className={cn("inline-flex", splitLevelClassName)}
              >
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    key={charIndex}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        array.reduce(
                          (sum, word) => sum + word.characters.length,
                          0
                        )
                      ),
                    }}
                    className={cn("inline-block", elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && (
                  <span className="whitespace-pre"> </span>
                )}
              </span>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  )
})

TextRotate.displayName = "TextRotate"

export { TextRotate }
