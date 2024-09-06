import "./Slounik.css";
import { useEffect, useState } from "react";
import SearchInput from "components/SearchInput";
import { useLocation, useSearchParams } from "react-router-dom";
import balbutaBelMock from "mocks/balb-bel.json";
import belBalbutaMock from "mocks/bel-balb.json";
import lettersMock from "mocks/letters.json";
import { Dictionary } from "types/Dictionary";
import Letter from "components/Letter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { add } from "./slounikSlice";
import { Button, List, ListItem, Typography } from "@mui/material";

const Slounik = () => {
  const { pathname } = useLocation();
  const [searchResults, setSearchResults] = useState<Dictionary[] | null>(null);
  const [letters, setLetters] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [params] = useSearchParams();

  const dictionary = useSelector((state: RootState) => state.slounik.dictionary);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname === "/balb-bel") {
      dispatch(add(balbutaBelMock));
      setSearchResults(balbutaBelMock);
      setLetters(lettersMock.latin);
      setCurrPage(1);
    } else if (pathname === "/bel-balb") {
      dispatch(add(belBalbutaMock));
      setSearchResults(belBalbutaMock);
      setLetters(lettersMock.cyrilic);
      setCurrPage(1);
    }
  }, [dispatch, pathname]);

  useEffect(() => {
    const query = params.get("q");
    const letter = params.get("letter");
    if (dictionary && typeof letter === "string") {
      setCurrPage(1);
      setSearchResults(
        dictionary.filter(({ wordname }) => {
          return wordname.startsWith("-")
            ? wordname.startsWith(letter, 1)
            : wordname.startsWith(letter);
        })
      );
    }

    if (dictionary && typeof query === "string") {
      setSearchResults(dictionary.filter(({ wordname }) => wordname.includes(query)));
    }
  }, [dictionary, params]);

  useEffect(() => {
    if (searchResults) {
      const arr = [];
      arr.length = Math.ceil(searchResults.length / 12);
      setPages(Array.from(Array(Math.ceil(searchResults.length / 12)), (v, i) => i + 1));
    }
  }, [searchResults]);

  return (
    <>
      <SearchInput />
      <div className="letters-container">
        {letters && letters.map((letter) => <Letter letter={letter} />)}
      </div>
      <List>
        {searchResults &&
          searchResults.map(
            ({ wordname, translation }, i) =>
              i < currPage * 12 &&
              i > currPage * 12 - 13 && (
                <ListItem key={wordname}>
                  <Typography variant="body1">{`${wordname} - ${translation}`}</Typography>
                </ListItem>
              )
          )}
      </List>
      <div className="pages-container">
        {pages &&
          pages.map((page) => (
            <Button
              className="page"
              key={page}
              onClick={() => setCurrPage(page)}
              variant="outlined"
            >
              {page}
            </Button>
          ))}
      </div>
    </>
  );
};

export default Slounik;
