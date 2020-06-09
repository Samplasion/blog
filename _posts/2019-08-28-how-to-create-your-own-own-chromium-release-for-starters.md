---
title: "How to build your own Chromium release for starters"
slug: how-to-create-your-own-own-chromium-release-for-starters
comment_id: 5d93b51a97132a02c435573e
date: 2019-08-28T16:43:00.000Z
excerpt: "In this post, we'll take a look at a comprehensive way to build a custom Chromium release."
image: "https://images.unsplash.com/photo-1504292004442-f285299403fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
tags: 
 - "Tutorial"
 - "Mac"
 - "Linux"
 - "Windows"
---

<p>The other day I downloaded the Avast antivirus and I noticed it installed the Secure browser. When I opened it, it didn't take long until I noticed it's just a Chromium based browser with built-in extensions.</p><p>After that, I started thinking, "Is it hard to create a Chromium-based browser?". Today, I can certainly say <strong>the answer is no</strong>.</p><p>But before actually starting with this tutorial, I should say that if you haven't got either a fast connection or much, much time, don't even bother starting this tutorial, because as stated in the official Chromium website, the download of the source code takes a long time on fast connections. I personally haven't got that fast of a connection, but I still managed to download it.</p><p>Don't get intimidated by the length of this tutorial; only selected sections of it will apply to you.</p><p>So, without further ado, let's start.</p><h4 id="preparation">Preparation</h4><!--kg-card-begin: html--><p>There are some things that you'll need to build your own Chromium release.</p>
<ul>
    <li>At least 100 GB of disk space on a drive formatted with a filesystem capable of handling files greater than 4 GB. Yes, the Chromium codebase is <strong>huge</strong>.</li>
    <li>
        The requirements stated by the Chromium docs. As of the 27th of August 2019, these are stated here.
        <ul>
            <li>
                For Windows, the requirements are:
                <ul>
                    <li>A 64-bit Intel machine with at least 8GB of RAM. More than 16GB is highly recommended.</li>
                    <li>An appropriate version of Visual Studio (tl;dr: either 2017 latest or 2019 latest)</li>
                    <li>Windows 7 or newer.</li>
                </ul>
            </li>
            <li>
                For macOS, the requirements are:
                <ul>
                    <li>A 64-bit Mac running 10.12+.</li>
                    <li>Xcode 8+</li>
                    <li>The OS X 10.12 SDK.</li>
                </ul>
            </li>
            <li>
                For Linux, the requirements depend on the target OS:
                <ul>
                    <li>
                        If the target OS is Linux:
                        <ul>
                            <li>A 64-bit Intel machine with at least 8GB of RAM. More than 16GB is highly recommended.
</li>
                            <li>You must have Git and Python v2 installed already.</li>
                        </ul>
                    </li>
                    <li>
                        If the target OS is Chromium OS, the steps are done through emulation, so, additionally to a working linux setup, you'll need:
                        <ul>
                            <li><a href="https://www.chromium.org/developers/how-tos/install-depot-tools">depot_tools installed</a></li>
                            <li><a href="https://g3doc.corp.google.com/tools/android/g3doc/development/crow/enable_kvm.md">Virtualization enabled</a></li>
                            <li><a href="https://chromium.googlesource.com/chromiumos/docs/+/master/simple_chrome_workflow.md">Simple Chrome</a> set up</li>
                        </ul>
                    </li>
                </ul>
                Obviously, you can choose to build for Linux but not ChromeOS, or to build for both.
            </li>
        </ul>
    </li>
</ul><!--kg-card-end: html--><h4 id="windows-pre-setup">Windows Pre-Setup</h4><p>Before setting up the Chromium codebase, you'll need to install Visual Studio. Chromium requires Visual Studio 2017 (&gt;=15.7.2) or 2019 (&gt;=16.0.0) to build. Visual Studio can also be used to debug Chromium. To install the required libraries along with the code, run:</p><pre><code class="language-bash">$ PATH_TO_INSTALLER.EXE ^
--add Microsoft.VisualStudio.Workload.NativeDesktop ^
--add Microsoft.VisualStudio.Component.VC.ATLMFC ^
--includeRecommended</code></pre><p>If you want to build for ARM64 Win32 then some extra arguments are needed. The full set for that case is:</p><pre><code class="language-bash">$ PATH_TO_INSTALLER.EXE ^
--add Microsoft.VisualStudio.Workload.NativeDesktop ^
--add Microsoft.VisualStudio.Component.VC.ATLMFC ^
--add Microsoft.VisualStudio.Component.VC.Tools.ARM64 ^
--add Microsoft.VisualStudio.Component.VC.MFC.ARM64 ^
--includeRecommended</code></pre><p>You must have the version 10.0.18362 or higher Windows 10 SDK installed. This can be installed separately or by checking the appropriate box in the Visual Studio Installer.</p><p>The SDK Debugging Tools must also be installed. If the Windows 10 SDK was installed via the Visual Studio installer, then they can be installed by going to: <strong>Control Panel → Programs → Programs and Features →</strong> Select the “<strong>Windows Software Development Kit</strong>” <strong>→ Change → Change →</strong> Check “<strong>Debugging Tools For Windows</strong>” <strong>→ Change</strong>. Or, you can download the standalone SDK installer and use it to install the Debugging Tools.</p><h4 id="installing-depot_tools">Installing <code>depot_tools</code></h4><p>The next step is to install the <code>depot_tools</code>, which are crucial to the development routine in which they are the frontend to building the source code.</p><p>Now, the installation method is the same on macOS and Linux, but it differs on Windows.</p><h5 id="linux-macos">Linux / macOS</h5><p>Clone the <code>depot_tools</code> repository:</p><pre><code>$ git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git</code></pre><p>Add <code>depot_tools</code> to the <em><strong>start</strong></em> of your PATH (you will probably want to put this in your <code>~/.bashrc</code> or <code>~/.zshrc</code>). Assuming you cloned <code>depot_tools</code> to <code>/path/to/depot_tools</code>:</p><pre><code>$ export PATH=/path/to/depot_tools:$PATH</code></pre><p>It's highly important that you put the <code>depot_tools</code> before any Python installations. See the second note below for more information.</p><h5 id="windows">Windows</h5><p>Download the <code>depot_tools</code> bundle and extract it somewhere. <strong><em>Make sure to extract the hidden </em></strong><code>.git</code><strong><em> directory to allow for the tools to auto update themselves</em></strong>.</p><p>Add <code>depot_tools</code> to the <em><em><strong>start</strong></em></em> of your PATH (must be ahead of any installs of Python). Again, it's highly important that you put the <code>depot_tools</code> before any Python installations. See the second note below for more information. </p><p>Assuming you unzipped the bundle to <code>C:\workspace\depot_tools</code>, edit the path to add the <code>depot_tools</code>. To edit the path, go to <strong><strong>Control Panel → System and Security → System → Advanced system settings</strong> </strong>if you have administrator access, or<strong> <strong>Control Panel → User Accounts → User Accounts → Change my environment variables</strong> </strong>if you haven't, then modify the PATH system variable to include <code>C:\workspace\depot_tools</code> at the start.</p><p>From a Command Prompt shell, run the command <code>gclient</code> (without arguments). On first run, it will install all the Windows-specific bits needed to work with the code, including <code>msysgit</code> and <code>python</code>.</p><!--kg-card-begin: html--><blockquote>
    <strong><strong>Notes</strong></strong>
    <ol>
        <li>If you run <code>gclient</code> from a shell that's not <code>cmd</code>, it may appear to run properly, but <code>msysgit</code>, <code>python</code>, and other tools may not get installed correctly.</li>
        <li>After running <code>gclient</code>, open a command prompt and type <code>where python</code>. Confirm that the <code>depot_tools</code> <code>python.bat</code> comes ahead of any copies of <code>python.exe</code>. <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=611087">If it doesn't, <code>gn</code> will build files it doesn't need to build</a>.</li>
    </ol>
</blockquote><!--kg-card-end: html--><h4 id="downloading-the-source-code">Downloading the Source Code</h4><p>If you are on Windows, execute the following steps before downloading:</p><pre><code class="language-bash">$ git config --global user.name "My Name"
$ git config --global user.email "my-name@chromium.org"
$ git config --global core.autocrlf false
$ git config --global core.filemode false
$ git config --global branch.autosetuprebase always</code></pre><p>To download the source code, execute the following steps:</p><pre><code class="language-bash"># Create a directory to store the files
$ mkdir Chrome
$ cd Chrome

# Start the download
$ fetch chromium</code></pre><p>If you don't want the full repo history, you can save a lot of time by adding the <code>--no-history</code> flag to <code>fetch</code>, and if at any time the installation stops before finishing, run  <code>gclient sync</code>.</p><blockquote>Expect the command to take 30 minutes on even a fast connection, and many hours on slower ones.</blockquote><p>When <code>fetch</code> is done, it'll have created a hidden <code>.git</code> directory and a <code>src</code> directory with the source code. Enter the <code>src</code> directory:</p><pre><code class="language-bash">$ cd src</code></pre><h4 id="platform-specific-and-general-instructions">Platform-Specific and General Instructions</h4><p>Now, the instructions for actually creating the build vary between cases, so here's a complete list.</p><h5 id="basic-setup">Basic setup</h5><!--kg-card-begin: html--><blockquote><strong>Note</strong><br>If you're on Linux, you must first follow <a href="#linux-setup">this</a>.</blockquote><!--kg-card-end: html--><p>Create a build directory by using:</p><figure class="kg-card kg-code-card"><pre><code class="language-bash">gn gen out/Default</code></pre><figcaption>You can replace <code>Default</code> with your own string, as long as it's a subdirectory of <code>out</code></figcaption></figure><p>This will generate all the needed files.</p><h5 id="windows-setup-with-visual-studio">Windows setup with Visual Studio</h5><p>If you want to use the Visual Studio IDE, pass <code>--ide=vs</code> to <code>gn gen</code>.</p><pre><code class="language-bash">$ gn gen --ide=vs out/Default
$ devenv out\Default\all.sln</code></pre><p>GN will produce a file <code>all.sln</code> in your build directory. It will internally use Ninja to compile while still allowing most IDE functions to work (there is no native Visual Studio compilation mode). If you manually run <code>gen</code> again you will need to resupply this argument, but normally <code>gn</code> will keep the build and IDE files up to date automatically when you build.</p><p>The generated solution will contain several thousand projects and will be very slow to load. Use the <code>--filters</code> argument to restrict generating project files for only the code you're interested in. Although this will also limit what files appear in the project explorer, debugging will still work and you can set breakpoints in files that you open manually. A minimal solution that will let you compile and run Chrome in the IDE but will not show any source files is:</p><pre><code class="language-bash">$ gn gen --ide=vs --filters=//chrome --no-deps out\Default</code></pre><p>You can selectively add other directories you care about to the filter like so: <code>--filters=//chrome;//third_party/WebKit/*;//gpu/*</code>.</p><h5 id="macos-setup-with-xcode">macOS setup with Xcode</h5><p>If you want to use Xcode, pass <code>--ide=xcode</code> to <code>gn gen</code>:</p><pre><code class="language-bash">$ gn gen out/Default --ide=xcode</code></pre><p>Open it:</p><pre><code class="language-bash">$ open out/Default/ninja/all.xcworkspace</code></pre><blockquote>You may run into a problem where <a href="http://yes/">http://YES</a> is opened as a new tab every time you launch Chrome. To fix this, open the scheme editor for the Run scheme, choose the Options tab, and uncheck “Allow debugging when using document Versions Browser”. When this option is checked, Xcode adds <code>--NSDocumentRevisionsDebugMode YES</code> to the launch arguments, and the <code>YES</code> gets interpreted as a URL to open.</blockquote><h5 id="linux-setup">Linux setup</h5><h6 id="install-additional-build-dependencies">Install additional build dependencies</h6><p>Once you have downloaded the code, run build/install-build-deps.sh</p><pre><code class="language-bash">$ ./build/install-build-deps.sh</code></pre><p>You will need to adjust the build dependencies for other distros. There are some <a href="https://chromium.googlesource.com/chromium/src/+/master/docs/linux_build_instructions.md#notes">notes</a> in the official guide.</p><h6 id="run-the-hooks">Run the hooks</h6><p>Once you've run <code>install-build-deps</code> at least once, you can now run the Chromium-specific hooks, which will download additional binaries and other things you might need:</p><pre><code class="language-bash">$ gclient runhooks</code></pre><!--kg-card-begin: html--><p><a href="#basic-setup">You can now follow this section.</a></p><!--kg-card-end: html--><h4 id="build-the-source-code">Build the source code</h4><p>Once you've edited the source code, you can run:</p><pre><code class="language-bash">$ autoninja -C out/Default chrome</code></pre><!--kg-card-begin: html--><p>where <code>out/Default</code> is the value you provided in <a href="#platform-specific-and-general-instructions">Platform-Specific and General Instructions</a></p><!--kg-card-end: html--><h4 id="run-the-source-code">Run the source code</h4><p>To run the build, it's enough to open it from Explorer/Finder/File manager. Or, if you want to do it through the Terminal:</p><pre><code class="language-bash"># Windows
$ out\Default\chrome.exe

\# macOS
$ out/Default/Chromium.app/Contents/MacOS/Chromium

\# Linux
$ out/Default/chrome</code></pre><!--kg-card-begin: html--><p>again, where <code>out/Default</code> is the value you provided in <a href="#platform-specific-and-general-instructions">Platform-Specific and General Instructions</a></p><!--kg-card-end: html--><h4 id="update-the-source-code">Update the source code</h4><p>If you want to update the source code to a newer version/commit of Chromium, run:</p><pre><code class="language-bash"># Update the code
$ git pull

\# Sync dependencies to the appropriate versions and re-run hooks as needed.
$ gclient sync</code></pre><h4 id="create-a-release-build">Create a Release build</h4><p>To create a release build, open <code>out/&lt;dir name&gt;</code> and edit <code>args.gn</code> to include:</p><pre><code class="language-gn">is_debug = false</code></pre><p>Building again creates a stand-alone executable that can be shared.</p><h4 id="final-thoughts">Final thoughts</h4><p>I really hope you'll get around to creating an awesome Chromium release, and I hope you enjoyed this tutorial. If you've got any questions, ask them in the comments. See you soon!</p>