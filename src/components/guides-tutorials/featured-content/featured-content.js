import React, { useEffect, useState } from "react";
import { DelayInput } from "react-delay-input";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// utils
import ContentContainer from "../../ui/content-container";
import ContentCard from "./card";
import CardSlider from "./card-slider";
import Button from "../../ui/button";
import { usePrevious } from "../../utils/hooks";
// css
import "../../agency/ready-made-apps/assets/slider.css";
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
} from "./featured-content-styles";
// data
import { REQUEST_TUTORIAL_LINK, TUTORIALS } from "./content-data";

const DATA = new Array(TUTORIALS.length)
    .fill(0)
    .map((_, index) => ({ ...TUTORIALS[index % TUTORIALS.length], id: index }));
const CARDS_PER_PAGE = 8;

const FeaturedContent = props => {
    const { data = DATA } = props;
    const [filteredContent, setFilteredContent] = useState(data);
    const [search, setSearch] = useState("");

    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState([]);
    const [cursor, setCursor] = useState(0);
    const prevCursor = usePrevious(cursor);

    // Filter result based on "search"
    useEffect(() => {
        const result = data.filter(item => {
            return (
                item.authorName.toLowerCase().includes(search) ||
                item.title.toLowerCase().includes(search) ||
                item.tags.some(tag => tag.toLowerCase().includes(search))
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
        <FeaturedContentSection {...props}>
            <ContentContainer className={containerClass}>
                <TextContentWrapper>
                    <Title>
                        <TitleHighlight> Featured </TitleHighlight> content
                    </Title>
                </TextContentWrapper>
                <CardSlider
                    data={new Array(4)
                        .fill(0)
                        .map((_, index) => ({ ...TUTORIALS[index % TUTORIALS.length], id: index }))}
                />
                <SearchAndFilterWrapper>
                    <ResultInfo>
                        <p className="text">
                            Showing {list.length} of {data.length}
                            <span> Tutorials </span>
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
                            <CloseIcon className={"icon--close"} onClick={() => setSearch("")} />
                        ) : (
                            <SearchIcon className={"icon"} />
                        )}
                    </SearchBar>
                </SearchAndFilterWrapper>

                <TransitionGroup className={mediaWrapperClass}>
                    {list.map(tutorial => (
                        <CSSTransition key={tutorial.id} timeout={250} classNames={"fade"}>
                            <ContentCard {...tutorial} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>

                {list.length <= 0 && (
                    <NotFound>
                        <p className={"not-found__text"}>No tutorials found.</p>
                        <img src={notFoundImg} alt="" className="not-found__img" />
                        <Button
                            className={"not-found__button"}
                            type={"primary"}
                            target={"_blank"}
                            link={REQUEST_TUTORIAL_LINK}
                        >
                            Request a tutorial
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
    );
};

export default FeaturedContent;
