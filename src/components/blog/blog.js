import React, { Fragment, useState, useEffect, useRef } from "react";
import { DelayInput } from "react-delay-input";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// utils
import ContentContainer from "../ui/content-container";
import BlogCard from "./components/blog-card";
import FeaturedBlog from "./components/featured-blog";
import Button from "../ui/button";
import { usePrevious } from "../utils/hooks";

// assets
import CloseIcon from "./assets/cross.inline.svg";
import SearchIcon from "./assets/search.inline.svg";
import ChevronIcon from "./assets/chevron.inline.svg";
import notFoundImg from "./assets/not-found.svg";

// styles
import {
    ButtonWrapper,
    SearchBar,
    ResultInfo,
    mediaWrapperClass,
    SearchAndFilterWrapper,
    TextContentWrapper,
    TitleHighlight,
    Title,
    containerClass,
    FeaturedContentSection,
    NotFound,
} from "./blog-styles";

const CARDS_PER_PAGE = 9;
const VERTICAL_OFFSET = 200;

const Blogs = props => {
    const { data, location } = props;
    const [filteredContent, setFilteredContent] = useState(data);
    const [search, setSearch] = useState("");
    const searchBarRef = useRef();

    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState([]);
    const [cursor, setCursor] = useState(0);
    const prevCursor = usePrevious(cursor);

    // Set "search" from query
    useEffect(() => {
        const query = location?.state?.query;

        if (!search && query) {
            setSearch(query.toLowerCase());
            if (searchBarRef && searchBarRef.current) {
                const top = searchBarRef.current?.getClientRects()?.[0]?.y;

                window.scrollTo({
                    top: top - VERTICAL_OFFSET,
                    behavior: "smooth",
                });
            }
        }
    }, [location]);

    // Filter result based on "search"
    useEffect(() => {
        const result = data.filter(blogPost => {
            const item = blogPost && blogPost.frontmatter;
            return (
                item.author.toLowerCase().includes(search) ||
                item.title.toLowerCase().includes(search) ||
                (Array.isArray(item.tags) &&
                    item.tags.some(tag => tag.toLowerCase().includes(search)))
            );
        });

        // Calculate "list" based on filtered results
        if (result.length > CARDS_PER_PAGE) {
            setList(result.slice(0, CARDS_PER_PAGE));
        } else {
            setList(result);
        }
        // Save "filtered" results for later use
        setFilteredContent(result);
    }, [search]);

    // Update list on "cursor" change
    useEffect(() => {
        if (prevCursor !== cursor && cursor !== 0) {
            setList(prevState => {
                return [...prevState, ...filteredContent.slice(cursor, cursor + CARDS_PER_PAGE)];
            });
        }
    }, [prevCursor, cursor, filteredContent]);

    //  Update "show more" button
    useEffect(() => {
        setShowMore(list.length < filteredContent.length);
    }, [list]);

    return (
        <Fragment>
            <FeaturedContentSection {...props}>
                <ContentContainer className={containerClass}>
                    <TextContentWrapper>
                        <Title>
                            <TitleHighlight> Webiny </TitleHighlight> Blog
                        </Title>
                    </TextContentWrapper>
                    {/*TODO: Maybe add a featured flag in blog "frontmatter" and filter based on that*/}
                    <FeaturedBlog data={data[0].frontmatter} />
                    <SearchAndFilterWrapper>
                        <ResultInfo>
                            <p className="text" ref={searchBarRef}>
                                Showing {list.length} of {data.length}
                                <span> Blogs </span>
                            </p>
                        </ResultInfo>
                        <SearchBar>
                            <DelayInput
                                minLength={2}
                                delayTimeout={250}
                                type="text"
                                placeholder={"Type to search..."}
                                value={search}
                                onChange={e => {
                                    const value = e.target.value && e.target.value.toLowerCase();
                                    if (typeof value === "string") {
                                        setSearch(value);
                                        // Reset "cursor"
                                        setCursor(0);
                                    }
                                }}
                            />
                            {search.length ? (
                                <CloseIcon
                                    className={"icon icon--close"}
                                    onClick={() => setSearch("")}
                                />
                            ) : (
                                <SearchIcon className={"icon"} />
                            )}
                        </SearchBar>
                    </SearchAndFilterWrapper>

                    <TransitionGroup className={mediaWrapperClass}>
                        {list.map(post => (
                            <CSSTransition key={post.id} timeout={250} classNames={"fade"}>
                                <BlogCard {...post.frontmatter} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>

                    {list.length <= 0 && (
                        <NotFound>
                            <p className={"not-found__text"}>No blogs found.</p>
                            <img src={notFoundImg} alt="" className="not-found__img" />
                            <Button
                                className={"not-found__button"}
                                type={"primary"}
                                target={"_blank"}
                                link={"https://docs.webiny.com"}
                            >
                                Visit docs
                            </Button>
                        </NotFound>
                    )}

                    {showMore && (
                        <ButtonWrapper>
                            <Button
                                className={"button"}
                                onClick={() =>
                                    setCursor(prevState => {
                                        const newValue = prevState + CARDS_PER_PAGE;
                                        if (newValue < filteredContent.length) {
                                            return newValue;
                                        }
                                        return prevState;
                                    })
                                }
                            >
                                Show more <ChevronIcon className={"icon"} />
                            </Button>
                        </ButtonWrapper>
                    )}
                </ContentContainer>
            </FeaturedContentSection>
        </Fragment>
    );
};

export default Blogs;
