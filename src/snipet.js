let data = () => {
    setfullpageloader(true);
    getData("quizdata")
      .then((res) => {
        setfullpageloader(false);
        setData(res);
        let some = res.find((x) => x.course == dt.coursename);
        setQuestions([...some.QuizDetails]);
        let somedt = res.find((x) => x.course == dt.coursename);
        setMinutes([...somedt.duration]);
      })
      .catch((err) => {
        setfullpageloader(false);
        console.log(err);
      });
  };
  useEffect(() => {
    data();
  }, []);

  const [model, setmodel] = useState({});
  const [loader, setloader] = useState(false);