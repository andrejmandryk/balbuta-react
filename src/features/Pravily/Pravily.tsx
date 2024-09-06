import { Button, Typography } from "@mui/material";
import "./Pravily.css";
import { useMemo, useState } from "react";

const Pravily = () => {
  const [currPage, setCurrPage] = useState(1);
  const pages = useMemo(() => [1, 2, 3], []);

  return (
    <div className="container">
      {currPage === 1 && (
        <>
          <Typography variant="h5">Дзесяць простых і канчатковых правіл мовы бальбута</Typography>
          <Typography variant="h6">Правіла першае</Typography>
          <Typography variant="body1" className="text">
            Усе назоўнікі ў адзіночным ліку маюць канчатак -uta. Пры зьмяненьні -utima. На u у гэтых
            канчатках заўжды падае націск. У іншых словах — заўжды на перадапошні склад. Прыклады: o
            balbuta. Гэта мова. Размаўляй на бальбуце! Balbu balbutima!
          </Typography>
          <Typography variant="h6">Правіла другое</Typography>
          <Typography variant="body1" className="text">
            У множным ліку назоўнікі маюць канчатак -utika. Пры зьмяненьні яны набываюць канчатак
            -utikama. На u у гэтых канчатках заўжды падае націск. Прыклады: o sutika. Гэта людзі.
            Balbuta sutikama. Мова людзей.
          </Typography>
          <Typography variant="h6">Правіла трэцяе</Typography>
          <Typography variant="body1" className="text">
            Усе дзеясловы маюць канчатак -uzu і не спрагаюцца. Імпэратыў утвараецца адсячэньнем
            -uzu. Прыклады: suta kusuzu. Чалавек есьць. Suta kusuzu trudutima. Чалавек есьць камень.
            Kusu du! Еж давай!
          </Typography>
          <Typography variant="h6">Правіла чацьвёртае</Typography>
          <Typography variant="body1" className="text">
            Усе прыметнікі маюць канчатак -oje. Дзеепрыметнікі і прыслоўі: -oju. Прыметнікі не
            зьмяняюцца. Прыклады: truduta trudoje. Камень цьвёрды. Trudoju kusuzu trudutima. Цяжка
            есьці камень.
          </Typography>
          <Typography variant="h6">Правіла пятае</Typography>
          <Typography variant="body1" className="text">
            Мінулы час дзеяслова ўтвараецца з дапамогай часьціцы bim. Будучы час дзеяслова
            ўтвараецца з дапамогай часьціцы bu. Умоўны лад дзеяслова ўтвараецца з дапамогай часьціцы
            bif. Прыклады: au bim kusuzu trudutima. Я еў камень. Tau bu kusuzu trudutima. Ты будзеш
            есьці камень. Nau bif kusuzu trudutima. Ён паеў бы камень.
          </Typography>
        </>
      )}
      {currPage === 2 && (
        <>
          <Typography variant="h6">Правіла шостае</Typography>
          <Typography variant="body1" className="text">
            У бальбуце няма гукаў “ж, “ш”, “ч”, “ц”. Усе астатнія вымаўляюцца так, як пішуцца. “Л”
            заўжды мяккі. Іншых правілаў няма. Balbu akkou tau aluzu. Гавары як хочаш.
          </Typography>
          <Typography variant="h6">Правіла сёмае</Typography>
          <Typography variant="body1" className="text">
            Бальбута пазьбягае катэгарычных ацэнак і ўстойлівых выразаў. У бальбуце няма асобнага
            слова для панятку “правільны” і панятку “самы”, няма словаў “мы”, “вы” або “яны”. Калі
            яны ўсё ж спатрэбяцца, іх сэнс можна перадаць іншымі словамі. Бальбута матывуе нас быць
            вольнымі, незалежнымі, самадастатковымі творчымі асобамі. Kalau tau neimatuzu balbutima,
            fu nau. Калі ты ня маеш слова, ствары яго. Onk balbaln bim fuzu sabau god — da bim
            takuzu nau laputko. Адзін бальбутанін майстраваў сабе бога — а палучыўся коцік.
          </Typography>
          <Typography variant="h6">Правіла восьмае</Typography>
          <Typography variant="body1" className="text">
            Бальбута прынцыпова не герархічная. Яна нікога ня ставіць вышэй ці ніжэй і прапануе для
            аднаго слова шырокі спэктр значэньняў. Напрыклад, слова suta можа значыць і мужчыну, і
            жанчыну, і дзіця, і рыбу, і тыгра, і матылька. І нават часам расьліну. Каб удакладніць,
            трэба стварыць кантэкст.
          </Typography>
          <Typography variant="h6">Правіла дзявятае</Typography>
          <Typography variant="body1" className="text">
            Бальбута мае памяншальны суфікс для назоўнікаў: -utko. Словы з памяншальным суфіксам не
            зьмяняюцца. Прыклады: kusu trudutko! Зьеш каменьчык! O tajnoje balbutko. Гэта прыгожы
            каменьчык. Aleh balbuzu akkou psautko. Алег брэша, як сабачка.
          </Typography>
        </>
      )}
      {currPage === 3 && (
        <>
          <Typography variant="h6">Правіла дзясятае і апошняе</Typography>
          <Typography variant="body1" className="text">
            Гэтыя тры прыгожыя суфіксы дапамагаюць перадаваць важныя значэньні. Суфікс занятку або
            працы: -aln для мужчын і -alinga для жанчын. Ён дадаецца да асновы дзеяслова і
            зьмяняецца паводле Правіла першага. Прыклады: kartaln nebalbuzu, nau bim kusuzu
            trudutima. Чытач маўчыць, ён праглынуў камень. Gajalinga balbuzu, au psauta. Доктарка
            кажа, што я сабака. Суфікс зборны: -ejle. Мае значэньне пэўнай сукупнасьці прадметаў або
            істотаў, аб’яднаных агуль­нымі прыкметамі. Ён дадаецца да назоўніка пасьля -ut. Такія
            назоўнікі не зьмяняюцца. Прыклады: o dreutejle. Гэта лес. U dreutejle grimuzu grimutejle
            trudoje grimalingutikama. У лесе грае аркестр каменных жанчын-музыкаў. Вось і ўсё. Balbu
            da bu samoje! Гавары і будзь вольны!
          </Typography>
          <Typography variant="h6">* * *</Typography>
          <Typography variant="body1" className="text">
            Перад тым, як перайсьці да слоўніка бальбуты, варта запомніць кароткае і вельмі істотнае
            слова: ujma. Ujma (з націскам на першым складзе, вядома) слова шматфункцыянальнае і
            азначае “шмат, усё, кожны, вялікі, вельмі, многае, дужа, асабліва” і г.д. Balbuta
            imatuzu neujma balbutikama. Tau bu balbuzu ujma broju! Бальбута мае няшмат словаў. Ты
            загаворыш вельмі хутка!
          </Typography>
        </>
      )}
      <div className="buttons-container">
        {pages.map((page) => (
          <Button key={page} onClick={() => setCurrPage(page)} variant="outlined">
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Pravily;
