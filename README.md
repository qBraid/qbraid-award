[<img src="https://qbraid-static.s3.amazonaws.com/logos/Launch_on_qBraid_white.png" width="150">](https://account.qbraid.com?gitHubUrl=https://github.com/qBraid/qbraid-award.git)

# qBraid Award: Most Creative Use of qBraid

The qBraid Award goes to the team that makes the most creative use of [qBraid](https://account.qbraid.com) at your hackathon. It's not a separate challenge: any team in any track can win it with the project you're already building. To enter, you send us **2 or 3 slides** and a **3 to 5 minute video** that walks through them with qBraid running on screen.

| | |
|---|---|
| **Who can enter** | Every team, in every track |
| **What you submit** | 2 or 3 slides from [our template](./template/qbraid-award-template.pptx), plus a 3 to 5 minute video walking through them with qBraid running on screen |
| **Where** | The entry form for your event ([below](#your-event)): team name, slides link, video link, and the email on your qBraid account |
| **Prize** | $200 in gift cards split across the winning team, plus 1,000 qBraid credits for each member |
| **Judged on** | Did it run on qBraid, and how creatively did you use it? ([details](#how-we-judge)) |

**Contents:** [Your event](#your-event) · [How to enter](#how-to-enter) · [Make it visual](#make-it-visual-in-one-line) · [Ideas](#ideas-for-using-qbraid) · [The slides](#the-slides) · [The video](#the-video) · [Code you can copy](#code-you-can-copy) · [How we judge](#how-we-judge) · [Checklist](#before-you-submit) · [FAQ](#faq) · [Links](#links)

---

## Your event

| Event | Dates | Entries due | Entry form | Discord |
|---|---|---|---|---|
| Intermountain Quantum Competition (BYU, Provo) | Nov 6 to 7, 2026 | **Sat Nov 7, 9:00am MST** | [Entry form](https://docs.google.com/forms/d/e/1FAIpQLSd21CqFVOQMGThTrO9gNsoffqMhMJqpvb9zndlQYIqMfzc_dw/viewform) | [Join](https://discord.gg/7mWPs3HGc) |
| TN Quantum Hackathon, Chattanooga | Nov 13 to 15, 2026 | **Sunday 9:00am**, with your final submission | [Entry form](https://docs.google.com/forms/d/e/1FAIpQLSeeom5YX0jADpt1a09Xox9EUQYPtJYoaggeVy-1iX4VT3yY9g/viewform) | [Alex to add: Discord link] |

**Intermountain Quantum Competition:** the award sits on top of whichever sponsor challenge your team is on. To get free credits and real hardware, join the IQC organization on qBraid with the invite link [Alex to add: org invite link]. qBraid gives a live platform walkthrough on Friday at 11:15am MST. Slides and videos are due Saturday at 9:00am MST, before the 3:00pm presentations, and the winner gets a certificate at the 5:00pm awards.

**TN Quantum Hackathon:** the winner is announced at the closing ceremony at The Landing Social House. If you want to run on Quantinuum through qBraid, each team member first creates a Quantinuum Nexus account and accepts its terms, which takes under a minute. Everyone who completes the weekend also gets a qBraid completion certificate with a verification link.

---

## How to enter

Entering takes about 30 minutes, in four steps:

1. **Use qBraid in your project.** You probably already are: if your notebook runs in qBraid Lab and sends a job to a qBraid device or simulator, you qualify. Want to stand out? [Make it visual](#make-it-visual-in-one-line). It takes about 5 minutes.
2. **Fill in the slides (10 minutes).** Download the [template](./template/qbraid-award-template.pptx). It opens in PowerPoint, Keynote or Google Slides. For Google Slides, upload it to Drive, then open it with Google Slides. Every slide tells you what to write, and the speaker notes tell you what to say in your video ([details](#the-slides)).
3. **Record your screen (10 minutes).** Walk through your slides, then show qBraid running ([what to show](#the-video)).
4. **Fill in the entry form (2 minutes).** Use the form for your event ([above](#your-event)). It asks for:
   - your team name
   - the slides link
   - the video link
   - your email: use the one on your qBraid account, so the prize reaches you. The form emails you a copy of your entry, with a link to edit it

   Set both links to "anyone with the link can view". You can edit your entry until the deadline.

---

## Make it visual in one line

Judges love a visual, and this gets you one fast.

1. Put [`make_visual.py`](./template/make_visual.py) next to your notebook.
2. Run this once you have results:

   ```python
   from make_visual import make_visual

   make_visual({"Simulator": sim_counts, "Hardware": hw_counts}, title="Our results")   # or just one counts dict
   ```

   That writes `visual.html`, an animated bar chart in a single file.
3. Open it next to your notebook in qBraid Lab's Agent Canvas panel. From a Lab terminal in the same folder, run:

   ```bash
   qbraid-canvas visual.html --title "Our results"
   ```

4. Make it yours: ask your AI assistant to restyle it, add controls, animate your algorithm step by step, or turn it into a game.

For inspiration, see [Quantum Runner](https://account.qbraid.com/explore/projects/q-ready-quantum-runner-2gkzz6) on qBraid's Explore page. It's a side-scroller where a real quantum measurement decides where the gaps go.

---

## Ideas for using qBraid

Any of these can be the core of a strong entry. One used well beats all of them used briefly.

- **Make it visual (we'd love to see this).** Turn your results into something people can see and play with: an interactive view, an animation of your algorithm converging, a live dashboard, even a game.
  - **For inspiration:** [Quantum Runner](https://account.qbraid.com/explore/projects/q-ready-quantum-runner-2gkzz6) on qBraid's Explore page is a side-scroller where a real quantum measurement decides where the gaps go.
  - **How:** start from [the one-liner above](#make-it-visual-in-one-line), or build your own self-contained HTML file and open it with `qbraid-canvas`. AI assistants are great at building these.
- **Share it on Explore.** Put your project in a GitHub repo and submit it from qBraid's Explore page, so anyone can launch it in qBraid Lab with one click.
- **Run on real quantum hardware.** Send your circuit to a QPU and compare the result with a simulator. Prices and live status for every device are in the [device catalog](https://account.qbraid.com/devices).
- **Use AI on qBraid (encouraged).** Ask [AI Chat](https://docs.qbraid.com/v2/ai/user-guide/overview) in your qBraid account to compare devices or explain a result, run a coding agent with Agent mode, or connect your own AI tool (Claude, Cursor, VS Code) to qBraid through the MCP server at `https://mcp.qbraid.com/mcp`. Show what you had it do and where you stepped in.
- **Push past your laptop with GPU simulators.** qBraid's GPU state-vector simulator handles circuits up to 35 qubits.
- **Compare devices.** Run the same circuit on two different kinds of hardware, superconducting and trapped-ion for example, and explain the difference.
- **Write once, run anywhere.** Write in Qiskit, Cirq, Braket or OpenQASM and run on a device that expects another format. The [qBraid transpiler](https://docs.qbraid.com/sdk/user-guide/transpiler) handles the conversion.
- **Make it reproducible.** Put your work in a repo with a Launch on qBraid button so anyone can open it in [qBraid Lab](https://docs.qbraid.com/lab/user-guide/getting-started) in one click.

**What doesn't count on its own:** signing up, running local code in a qBraid notebook, copying a tutorial unchanged, or a single "hello world" job unconnected to your project.

---

## The slides

2 or 3 slides from our template. They're the outline for your video, so keep them short.

- **Template:** [`qbraid-award-template.pptx`](./template/qbraid-award-template.pptx). It opens in PowerPoint, Keynote or Google Slides (in Google Drive, choose New > File upload, then open it with Google Slides).
- **Finished example:** [`qbraid-award-example.pptx`](./template/qbraid-award-example.pptx), or [as a PDF](./template/qbraid-award-example.pdf). The team is made up and the numbers are illustrative.

1. **qBraid features we used:** keep a tile for every qBraid feature you used, write a line on how, and delete the rest.
2. **Our best qBraid moment:** one visual (a chart, a screenshot of your interactive view, or a frame from your game), what it shows, and where AI helped.
3. **Check it (optional):** job IDs, links, and cost.

![Example slide: qBraid features we used](./images/example-1.png)

<details>
<summary>Example slides 2 and 3</summary>

![Example slide 2: Our best qBraid moment](./images/example-2.png)

![Example slide 3: Check it](./images/example-3.png)

</details>

---

## The video

A screen recording of 3 to 5 minutes, with someone on your team talking through your slides and then showing the real thing running. It doesn't need editing or polish: we care that it shows qBraid doing real work.

**What to show:**

| Time | Show |
|---|---|
| 0:00 to 0:30 | Your team, your challenge, and what you built (slide 1) |
| 0:30 to 3:00 | **qBraid doing the work, on screen:** your notebook running in qBraid Lab, a job going to a simulator or quantum hardware, results coming back on the Jobs page. Say which qBraid features you used |
| 3:00 to 4:30 | Your best result or visualization (slide 2), plus **where AI helped** and where you stepped in |
| Last 30 seconds | What you'd try next |

**One rule:** we have to *see* it run on qBraid. Show the job, the device and the results on screen. That's how we check entries, so you don't need to send job IDs.

**How to record:**

- On a Mac, press Cmd+Shift+5. On Windows, use the Snipping Tool's record option. [Loom](https://www.loom.com) or a Zoom recording of yourself sharing your screen also works.
- Upload it as **unlisted on YouTube**, to Loom, or to Google Drive with "anyone with the link can view".
- Keep it under 5 minutes. Judges stop watching after that.

---

## Code you can copy

This runs one circuit on qBraid's GPU simulator and on real hardware, prints the job IDs, and draws the simulator vs. hardware chart you can show in your video. Swap in your own circuit and device. Device IDs are in the [device catalog](https://account.qbraid.com/devices).

```python
from qbraid.runtime import QbraidProvider
from qbraid.visualization import plot_histogram

provider = QbraidProvider()  # in qBraid Lab, your account is picked up automatically

sim = provider.get_device("qbraid:qbraid:sim:gpu-sv")  # qBraid GPU simulator
qpu = provider.get_device("aws:iqm:qpu:garnet")        # real hardware: check the price first

sim_job = sim.run(circuit, shots=1000)
qpu_job = qpu.run(circuit, shots=200)
print(sim_job.id, qpu_job.id)  # job IDs

sim_counts = sim_job.result().data.get_counts()
qpu_counts = qpu_job.result().data.get_counts()
plot_histogram([sim_counts, qpu_counts])  # simulator vs. hardware chart
```

More in the docs: [running on qBraid](https://docs.qbraid.com/sdk/user-guide/providers/native), [working with jobs](https://docs.qbraid.com/sdk/user-guide/providers/jobs) and [plotting results](https://docs.qbraid.com/sdk/user-guide/visualization).

**Save credits and time:**

- Get your circuit right on a simulator before you send it to hardware.
- Hardware charges per job plus per shot, so pack as much as you can into each job and choose your shot count on purpose.
- Hardware queues can be long, so send hardware jobs early in the event, not an hour before the deadline.

---

## How we judge

qBraid staff watch every video after the deadline, with your slides open alongside, separately from track judging. For each one:

1. **Did it clearly run on qBraid?** If we can't see qBraid doing real work on screen, the entry is out.
2. **How creatively did you use qBraid?** We score it from 1 to 5. A creative visualization (an interactive view, an animation or a game built on your results), several features used well, comparing devices, a clever use of AI, or a clear result someone outside quantum can follow all push the score up.

We re-watch the top two and pick the winner.

- **Spending more credits doesn't help.** A careful, cheap hardware run beats an expensive one.
- **Using AI is encouraged.** Show what you had it do and where you checked its work.

---

## Before you submit

- [ ] 2 or 3 slides from the template, and the link opens for anyone
- [ ] Your video is 3 to 5 minutes, and the link opens for anyone
- [ ] It shows qBraid running on screen: notebook, jobs and results
- [ ] You say which qBraid features you used, and where AI helped if you used it
- [ ] The entry form is filled in, using the email on your qBraid account, before the deadline

---

## FAQ

**Do we have to change our project?** No. Show how qBraid fits into what you're already building.

**Does entering affect our track judging?** No. The award is judged separately, and your track result doesn't affect it.

**We only used simulators. Can we still win?** Yes. Hardware isn't required, and a creative use of the simulators counts.

**Can we use AI?** Yes, please. Tell us in your video what it did and where you stepped in.

**Do we need slides?** Yes, 2 or 3 from the [template](#the-slides). Your video can just be you talking through them, then showing qBraid running.

**Can we edit our entry after submitting?** Yes, until the deadline.

**How do we get the prize if we win?** We announce the winner at the event and email the address on your entry, which should be the one on your qBraid account.

---

## Links

- [qBraid account](https://account.qbraid.com) and [device catalog](https://account.qbraid.com/devices)
- [qBraid docs](https://docs.qbraid.com) and [getting started in qBraid Lab](https://docs.qbraid.com/lab/user-guide/getting-started)
- [qBraid SDK on GitHub](https://github.com/qBraid/qBraid)
- Slides: [template (.pptx)](./template/qbraid-award-template.pptx) · [example (.pptx)](./template/qbraid-award-example.pptx) · [example (PDF)](./template/qbraid-award-example.pdf)
- [qBraid AI](https://docs.qbraid.com/v2/ai/user-guide/overview) (AI Chat, Agent mode, MCP server) and the [qBraid CLI](https://docs.qbraid.com/v2/cli/user-guide/overview)
- Questions: ask a qBraid mentor at your event or in your event's Discord ([Intermountain](https://discord.gg/7mWPs3HGc)), or email alex@qbraid.com
