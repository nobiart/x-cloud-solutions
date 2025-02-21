import { useEffect, useState } from "react";
import styled from "styled-components";

interface IProps {
  words: string[];
}

export function AnimatedText({ words }: IProps) {
  const [visibleLetters, setVisibleLetters] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[wordIndex];

      if (!isRemoving) {
        setVisibleLetters(currentWord.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === currentWord.length) {
          setTimeout(() => setIsRemoving(true), 1000);
        }
      } else {
        setVisibleLetters(currentWord.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index - 1 === 0) {
          setIsRemoving(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [index, isRemoving, wordIndex, words]);

  return (
    <TextContainer>
      {visibleLetters}
      <span>?</span>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: 500;
  background: ${(props) => props.theme.systemColors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
`;
