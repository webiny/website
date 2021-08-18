import React, { useState } from "react";
import { css, cx } from "emotion";
import theme from "../../utils/theme";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const styles = css`
  --size: 0.5rem;
  --navbar-height: 100px;

  & {
    height: 100%;
    max-height: calc(100vh - var(--navbar-height) - 2rem);
    overflow-y: auto;
    position: sticky;
    top: calc(var(--navbar-height) + 2rem);
    border-right: 1px solid ${theme.color.grayBorder};

    & ul.root {
      padding: var(--size) var(--size) var(--size) 0;
    }

    & ul {
      list-style: none;

      & li {
        margin: var(--size);

        & a {
          font-size: 14px;
          color: ${theme.color.grayText};
          text-decoration: none;

          &.active, &:hover {
            color: ${theme.color.primaryDark}
          }
        }
      }
    }
`;

const Headings = ({ headings, level, activeId }) => (
    <ul className={level === 0 ? "root" : ""} style={{ paddingLeft: 8 * level }}>
        {headings.map(heading => (
            <li key={heading.url}>
                <a
                    href={heading.url}
                    onClick={e => {
                        e.preventDefault();
                        document.querySelector(heading.url).scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className={cx({ ["active"]: heading.url.endsWith(activeId) })}
                >
                    {heading.title}
                </a>
                {/* Recursively render sub-headings */}
                {Array.isArray(heading.items) && (
                    <Headings headings={heading.items} level={level + 1} activeId={activeId} />
                )}
            </li>
        ))}
    </ul>
);

const TableOfContents = ({ tableOfContents }) => {
    const [activeId, setActiveId] = useState(null);
    useIntersectionObserver(setActiveId);

    const items = tableOfContents && tableOfContents.items.length ? tableOfContents.items : [];

    return (
        <nav className={styles} aria-label="Table of contents">
            <Headings headings={items} level={0} activeId={activeId} />
        </nav>
    );
};

export default TableOfContents;