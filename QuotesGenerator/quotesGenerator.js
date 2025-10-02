document.addEventListener("DOMContentLoaded", () => {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const generateBtn = document.querySelector(".btn-generate");
  const twitterBtn = document.querySelector(".btn-twitter");

  // Fetch a random quote from Quotable
  async function fetchQuote() {
    // Set loading state + disable buttons
    quoteEl.textContent = "Loading";
    quoteEl.classList.add("loading");
    authorEl.textContent = "Loading";
    authorEl.classList.add("loading-author");
    generateBtn.disabled = true;
    twitterBtn.disabled = true;

    try {
    //   const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      const data = await response.json();

      // Display quote & author
      quoteEl.textContent = data.content;
      authorEl.textContent = `— ${data.author}`;
    } catch (err) {
      console.error("Quote fetch error:", err);
      quoteEl.textContent = "Oops! Something went wrong.";
      authorEl.textContent = "";
    } finally {
      // Remove loading state + enable buttons
      quoteEl.classList.remove("loading");
      authorEl.classList.remove("loading-author");
      generateBtn.disabled = false;
      twitterBtn.disabled = false;
    }
  }

  // Share quote on Twitter
  function shareOnTwitter() {
    const quote = quoteEl.textContent || "";
    const author = authorEl.textContent || "";
    // don't attempt to share loading or error messages
    if (!quote || quote.toLowerCase().includes("loading") || quote.toLowerCase().includes("oops")) return;
    const tweet = `${quote} ${author}`;
    // const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(twitterUrl, "_blank");
  }

  // Event listeners
  generateBtn.addEventListener("click", fetchQuote);
  twitterBtn.addEventListener("click", shareOnTwitter);

  // Initial fetch on load
  fetchQuote();
});
