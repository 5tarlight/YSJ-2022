function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

function start() {
  const birth = moment("2005-09-27");
  const birthday = moment("2022-09-27");
  const diff = birthday.diff(birth, "days");

  document.getElementById("birth").onclick = () => {
    alert("2022.09.27은 윤소정 님이 태어난지 " + diff + "일 되는 날입니다.");
  };

  // document.getElementById("from-now").onclick = () => {
  //   alert("지금은 윤소정 님이 태어난지 " + birth.fromNow() + " 인 날입니다.");
  // };

  document.getElementById("help").onclick = () => {
    alert(
      "사실 이 사이트를 만든 사람은 생각보다 이렇고 저런말을 잘 하지 못하는 관계로 여기저기에 하고 싶었던 말들을 숨겨놨습니다. " +
        "제정신은 아닌거같지만 데스노트보다는 양호하다고 생?각되기는 하네요."
    );
  };

  document.getElementById("hidden").onclick = () => {
    alert(
      "문제가 풀리지 않을 떈, 문제를 읽어보아야 한다. 사실 시험기간이기도하고 원래는 더 복잡하고 세부적인 코드가 사용되어야 하는데 " +
        "2시간동안 만든거다 보니까 퀄리티도 많이 낮고 디테일도 없는데 그 부분에 대해서 사죄드립니다. " +
        "그래도 1년만의 생일에 일본어 100번 쓰느라 팔에 근육생겼을텐데 윤소정님의 앞날에 꽃길만 있기를 기원합니다. " +
        "사실 아까도 말했듯 뭐 축하하고 이런거 하나도 할줄 모르는 저이기에 아래의 마지막 선물을 드리려고 합니다. " +
        "힌트는 Base64 복호화(decrypt)입니다. 클립보드를 확인해보세요."
    );

    copyTextToClipboard(
      '"7Jyk7IaM7KCV7J2YIOunjCAxN+yCtOuQqOydhCDstpXtlZjtlanri4jri6QhIOywqOuniCDsnbTrn7DqsbAg6re464Ol7J2AIOuqu+yTsOqyoOyWtOyEnCDsnbTroIfqsowg7JSB64uI64ukLiDsu7Tqs7XsnbTsl4jsnLzrqbQg642UIOuzteyeoe2VmOqyjCDslZTtmLjtmZTtlojsnYTthZDrjbAg6re4656Y64+EIOydtOygleuPhOuKlCDssL7snYQg7IiYIOyeiOydhOqxsOudvCDrr7/slrTsmpR+44WOLiDslrTsqYPqsbDrgpgg7J207KCcIOuvvOymneuPhCDrgpjsmKTripQg64KY7J206rCAIOuQmOyXiOqzoCDsi5ztl5jrj4Qg64KY7J2067O064ukIOyggeqyjCDrgqjslZjripTrjbAg7IOd7J287J2064uI6rmMIOuEiOustCDqs7XrtoDrp4wg7ZWc64uk6rOgIOyKpO2KuOugiOyKpOuwm+yngCDrp5Dqs6Ag7ZaJ67O17ZWcIO2VmOujqCDrs7TrgrTshajsnLzrqbQg7KKL6rKg7Iq164uI64ukLiAy7ZWZ6riwIOyEseyggeuPhCDsnpgg64KY7Jik6ri4KOuCtCDrsJTroZwg65KkIOOFjikg67CU65286rKg7Iq164uI64ukLg=="'
    );
  };
}

window.addEventListener("DOMContentLoaded", start);
