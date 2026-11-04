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

> **Use your credits.** They're there to be used, not to sit in your wallet. Run on real hardware, launch a GPU, try qBraid AI, and explore everything in the [qBraid docs](https://docs.qbraid.com). The one rule: every run should do something for your project. Benchmarking a device just to fill a table doesn't count.

**Contents:** [Your event](#your-event) · [How to enter](#how-to-enter) · [Make it visual](#make-it-visual-in-one-line) · [Ideas](#ideas-for-using-qbraid) · [The slides](#the-slides) · [The video](#the-video) · [Code you can copy](#code-you-can-copy) · [How we judge](#how-we-judge) · [Checklist](#before-you-submit) · [FAQ](#faq) · [Links](#links)

---

## Your event

| Event | Dates | Entries due | Entry form | Discord |
|---|---|---|---|---|
| Intermountain Quantum Competition (BYU, Provo) | Nov 6 to 7, 2026 | **Sat Nov 7, 9:00am MST** | [Entry form](https://docs.google.com/forms/d/e/1FAIpQLSd21CqFVOQMGThTrO9gNsoffqMhMJqpvb9zndlQYIqMfzc_dw/viewform) | [Join](https://discord.gg/7mWPs3HGc) |
| TN Quantum Hackathon, Chattanooga | Nov 13 to 15, 2026 | **Sunday 9:00am**, with your final submission | [Entry form](https://docs.google.com/forms/d/e/1FAIpQLSeeom5YX0jADpt1a09Xox9EUQYPtJYoaggeVy-1iX4VT3yY9g/viewform) | [Alex to add: Discord link] |

**Intermountain Quantum Competition:** the award sits on top of whichever sponsor challenge your team is on. To get free credits and real hardware, join the IQC organization on qBraid: the invite link is on the [IQC event page](https://account.qbraid.com/hackathons/2026/iqc) (sign in first) and pinned in the IQC Discord. qBraid gives a live platform walkthrough on Friday at 11:15am MST. Slides and videos are due Saturday at 9:00am MST, before the 3:00pm presentations, and the winner gets a certificate at the 5:00pm awards.

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

Your credits are there to be used, so try things. Pick the features that move your project forward, and say in your video why you used each one.

- **Make it visual (we'd love to see this).** Turn your results into something people can see and play with: an interactive view, an animation of your algorithm converging, a live dashboard, even a game.
  - **For inspiration:** [Quantum Runner](https://account.qbraid.com/explore/projects/q-ready-quantum-runner-2gkzz6) on qBraid's Explore page is a side-scroller where a real quantum measurement decides where the gaps go.
  - **How:** start from [the one-liner above](#make-it-visual-in-one-line), or build your own self-contained HTML file and open it with `qbraid-canvas`. AI assistants are great at building these.
- **Run on real hardware, across devices.** Send your project's circuit to a QPU, then to a different kind of QPU: trapped-ion (IonQ), superconducting (IQM, Rigetti) or neutral-atom (QuEra). Explain what the difference means for your problem. The [device catalog](https://account.qbraid.com/devices) has prices and live status for every device, and the docs show how to read each device's [calibrations and connectivity](https://docs.qbraid.com/v2/sdk/user-guide/providers/calibrations).
- **Run GPUs.**
  - **On-demand GPU instance:** launch one from the **On-Demand** tab of your [qBraid dashboard](https://account.qbraid.com/dashboard) to train a model or simulate a bigger version of your problem ([GPUs in qBraid Lab](https://docs.qbraid.com/v2/lab/user-guide/gpus)).
  - **GPU simulators:** send circuits to `qbraid:qbraid:sim:gpu-sv` for exact state vectors up to 35 qubits, or `qbraid:qbraid:sim:gpu-tn` for tensor networks up to 500 qubits ([GPU simulators](https://docs.qbraid.com/v2/sdk/user-guide/providers/gpu-simulators)).
- **Use qBraid AI (encouraged).** Show what you had it do and where you stepped in.
  - **[AI Chat](https://account.qbraid.com/chat):** compare devices for your circuit, or explain a result.
  - **[Agent mode](https://docs.qbraid.com/v2/ai/user-guide/agent-mode):** open **Agent** in your qBraid account and attach a coding agent to your Lab instance. It writes, runs and fixes your notebook with you.
  - **Your own AI tool:** connect Claude, Cursor or VS Code through the [MCP server](https://docs.qbraid.com/v2/ai/integrations/mcp-server) at `https://mcp.qbraid.com/mcp`, or call models with your qBraid API key through the [AI Gateway](https://docs.qbraid.com/v2/ai/integrations/ai-gateway).
- **Build circuits visually** in the [Circuit Composer](https://docs.qbraid.com/v2/account/composer), then send them to any device.
- **Track it in Lab.** [Quantum Devices](https://docs.qbraid.com/v2/lab/user-guide/quantum-devices) and [Quantum Jobs](https://docs.qbraid.com/v2/lab/user-guide/quantum-jobs) in qBraid Lab show device status and every job you've sent.
- **Write once, run anywhere.** Write in Qiskit, Cirq, Braket or OpenQASM, and run on a device that expects another format. The [qBraid transpiler](https://docs.qbraid.com/v2/sdk/user-guide/transpiler) handles the conversion.
- **Share it on Explore.** Put your project in a GitHub repo with a Launch on qBraid button, and submit it from qBraid's [Explore](https://account.qbraid.com/explore) page. Then anyone can open it in [qBraid Lab](https://docs.qbraid.com/v2/lab/user-guide/getting-started) with one click.

**Have a reason for each run.** Credits spent on your project count in your favor. Two examples:
- A run on a second device should answer a question your project has, such as how hardware noise changes your answer.
- A GPU run should push your actual problem further.

Running benchmarks just to run them doesn't count.

**What doesn't count on its own:** signing up, running local code in a qBraid notebook, copying a tutorial unchanged, a single "hello world" job unconnected to your project, or benchmarks that don't connect to your project.

---

## The slides

2 or 3 slides from our template. They're the outline for your video, so keep them short.

- **Template:** [`qbraid-award-template.pptx`](./template/qbraid-award-template.pptx). It opens in PowerPoint, Keynote or Google Slides (in Google Drive, choose New > File upload, then open it with Google Slides).
- **Finished example:** [`qbraid-award-example.pptx`](./template/qbraid-award-example.pptx), or [as a PDF](./template/qbraid-award-example.pdf). The team is made up and the numbers are illustrative.

1. **qBraid features we used:** keep a tile for every qBraid feature you used, write a line on how, and delete the rest.
2. **Our best qBraid moment:** one visual (a chart, a screenshot of your interactive view, or a frame from your game), what it shows, and where AI helped.
3. **Check it (optional):** job IDs, links, and what your credits went to.

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

More in the docs: [running on qBraid](https://docs.qbraid.com/v2/sdk/user-guide/providers/getting-started), [working with jobs](https://docs.qbraid.com/v2/sdk/user-guide/providers/jobs) and [plotting results](https://docs.qbraid.com/v2/sdk/user-guide/visualization).

**Get the most from your credits:**

- Get your circuit right on a simulator first, so each hardware run answers a real question.
- Hardware charges per job plus per shot, so pack related circuits into one job and choose your shot count on purpose. Spend what you save on another device or a bigger run.
- Hardware queues can be long, so send hardware jobs early in the event, not an hour before the deadline.

---

## How we judge

qBraid staff watch every video after the deadline, with your slides open alongside, separately from track judging. For each one:

1. **Did it clearly run on qBraid?** If we can't see qBraid doing real work on screen, the entry is out.
2. **How creatively did you use qBraid?** We score it from 1 to 5. These all push the score up:
   - a creative visualization (an interactive view, an animation or a game built on your results)
   - several qBraid features, each used for a good reason
   - runs across devices that tell you something about your problem
   - a GPU run that takes your problem further
   - a clever use of AI
   - a clear result someone outside quantum can follow

We re-watch the top two and pick the winner.

- **Use your credits.** Hardware, GPUs and qBraid AI all count when they serve your project. Benchmarks for their own sake don't.
- **Using AI is encouraged.** Show what you had it do and where you checked its work.

---

## Before you submit

- [ ] 2 or 3 slides from the template, and the link opens for anyone
- [ ] Your video is 3 to 5 minutes, and the link opens for anyone
- [ ] It shows qBraid running on screen: notebook, jobs and results
- [ ] You say which qBraid features you used and why each one mattered for your project, and where AI helped if you used it
- [ ] The entry form is filled in, using the email on your qBraid account, before the deadline

---

## FAQ

**Do we have to change our project?** No. Show how qBraid fits into what you're already building.

**Does entering affect our track judging?** No. The award is judged separately, and your track result doesn't affect it.

**Should we save our credits?** No. Use them on hardware, GPUs and qBraid AI. Just make sure each run does something for your project.

**We only used simulators. Can we still win?** Yes. Hardware isn't required, and a creative use of the simulators counts.

**Can we use AI?** Yes, please. Tell us in your video what it did and where you stepped in.

**Do we need slides?** Yes, 2 or 3 from the [template](#the-slides). Your video can just be you talking through them, then showing qBraid running.

**Can we edit our entry after submitting?** Yes, until the deadline.

**How do we get the prize if we win?** We announce the winner at the event and email the address on your entry, which should be the one on your qBraid account.

---

## Links

- [qBraid account](https://account.qbraid.com) and [device catalog](https://account.qbraid.com/devices)
- [qBraid docs](https://docs.qbraid.com) and [getting started in qBraid Lab](https://docs.qbraid.com/v2/lab/user-guide/getting-started)
- [qBraid SDK on GitHub](https://github.com/qBraid/qBraid)
- Slides: [template (.pptx)](./template/qbraid-award-template.pptx) · [example (.pptx)](./template/qbraid-award-example.pptx) · [example (PDF)](./template/qbraid-award-example.pdf)
- [qBraid AI](https://docs.qbraid.com/v2/ai/user-guide/overview) (AI Chat, Agent mode, MCP server, AI Gateway) and the [qBraid CLI](https://docs.qbraid.com/v2/cli/user-guide/overview)
- [GPUs in qBraid Lab](https://docs.qbraid.com/v2/lab/user-guide/gpus) and [GPU simulators](https://docs.qbraid.com/v2/sdk/user-guide/providers/gpu-simulators)
- Questions: ask a qBraid mentor at your event or in your event's Discord ([Intermountain](https://discord.gg/7mWPs3HGc)), or email alex@qbraid.com
