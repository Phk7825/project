function load_list(searchInput,nowId){
	alert("asdasadaddadsd돼");
	$.ajax({
		url:"HH",
		type:"POST",
		data:{
			send_searchInput : searchInput,
			send_nowId : nowId
		},
		success: function(abc){
			var data1 = abc;
			console.log(data1);
			for(let i=0;i<data1.length;i++){
				let title = data1[i].title;
				let content = data1[i].content;
				let writer = data1[i].writer;
				let writedate = data1[i].writedate;
				let tabletype = data1[i].tabletype;
				$("#projectSearchResult").append(
				'<li class="post-search-item js-search-item highlight" data-code="post" colabo_srno="1887714" colabo_commt_srno="31032657" colabo_remark_srno="68012894" rgsn_dttm="20230714094213"> '
			     +'   <i class="icon-post-type comment" style="float:left;"></i> '
			     +'   	<div class="search-sub-text-wrap"> '
            	 +'			<a href="#" class="search-text-type-3 contents-tit"> '
                 +' 	<p style="margin:0;"><span class="post-name-txt">'+tabletype+'</span><strong>'+content+'</strong></p> '
           	     +'	</a>  '
            	 +'	<p class="search-text-type-3 contents-project" style="margin:0;"> '
                 +'	<span class="search-name ellipsis">'+writer+'</span> <span class="date">'+writedate+'</span> '
           		 +'	</p> '
        		 +'	</div> ' 
				 +'	</li> '  
				);
			}
		}		
	});
};
function load_board(project_id){
	alert(project_id+"입니다!");
    $.ajax({
        url:"AllBoardServlet",
        type:"POST",
        data:{
            send_projectId : project_id
        },
       		success: function(data) {
			    var hkbkbk = data.b;
			    var hkbkbk1 = data.b1;
			    var hkbkbk2 = data.b2;
			    var hkbkbk3 = data.b3;
			    var hkbkbk4 = data.b4;
				let a = 0;
				let b = 0;
				let c = 0;
				let d = 0;
            for(let i = 0; i < hkbkbk.length; i++){
				let type = hkbkbk[i].Type;
                if(type == 1){
				let title = hkbkbk[i].title1;
				let content = hkbkbk[i].content1;
				let boardwriter = hkbkbk[i].boardwriter1;
				let registdate = hkbkbk[i].registdate1;
				let jobtitle = hkbkbk[i].jobTitle;
				$("#projectFeedArea").append(
				'<div class="post-card-header immutable">  '
                +'   <div class="post-card-scroll"> '
                +'        <div class="card-header-top"> '
                +'            <div class="post-author main js-post-author" data-author-id="hkbk00@gmail.com"> '
                +'                <span class="thumbnail size40 radius16" style="background-image: url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png?width=400&amp;height=400), url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png), url(/flow-renewal/assets/images/profile-default.svg)" data=""></span>  '
                +'                <dl class="post-author-info">  '
                +'                    <dt> '
                +'                        <strong class="author ellipsis notranslate">'+boardwriter+'</strong> '
                +'                        <em class="position ellipsis" style="display:inline" data="">'+jobtitle+'</em> '
                +'                        <span class="date">'+registdate+'</span> '
                +'                        <span class="post-security" style="display:inline" data=""> <i class="fa-solid fa-users" style="color:#aaa"></i></span> '
                +'                    </dt> '
                +'                    <dd class="d-block"> '
                +'                        <strong class=""></strong> '
                +'                        <span class="team"></span> '
                +'                    </dd> '
                +'                </dl> '
                +'            </div> '
                +'            <div> '
                +'                <div class="post-option"> '
                +'                    <button id="pinToTopBnt" class="js-pin-post fixed-btn js-pin-authority " style="display:block" data=""> '
                +'                        <span class="blind">상단 고정 등록</span> '
                +'                    </button> '
                +'                    <button class="js-setting-button set-btn"> '
                +'                        <span></span> '
                +'                        <span></span> '
                +'                        <span></span> '
                +'                    </button> '
                +'                    <ul class="js-setting-ul js-setting-layer setup-group d-none"> '
                +'                        <li class="js-setting-item" data-code="modify" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-write"></i>수정 '
                +'                                <i class="edit-auth-icon icons-question js-mouseover d-none" mouseover-text="공동 수정 권한이 활성화 되어있습니다." style="display:none" data=""></i> '
                +'                            </a> '
                +'                        </li> '
                +'                        <li class="js-setting-item" data-code="copy" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-project-1"></i>다른 프로젝트에 복사</a> '
                +'                        </li><li class="js-setting-item" data-code="url" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-copy"></i>링크 복사</a> '
                +'                        </li> '
                +'                        <li class="js-setting-item" data-code="delete" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-delete-3"></i>삭제</a> '
                +'                        </li> '
                +'                    </ul> '
                +'                </div> '
                +'            </div> '
                +'        </div> '
                +'        <div class="card-header-bottom"> '
                +'            <div class="post-title-area"> '
                +'                <h4 class="post-title">'+title+'</h4> '
                +'            </div> '
                +'        </div> '
                +'        <div class="post-card-container"> '
				+'        <div id="originalPost" class="post-card-content " style="display:block" contenteditable="false"><div>'+content+'</div></div> '
                +'            <div class="post-bottom-area"> '
                +'                <div class="post-bottom-menu js-reaction-bookmark"> '
                +'                    <div class="bottom-button-area"> '
                +'                        <button class="js-post-reaction post-bottom-button "> '
                +'                            <i class="icon-reaction"></i> '
                +'                            <span>좋아요</span> '
                +'                        </button> '
                +'                        <button class="js-post-bookmark post-bottom-button "> '
                +'                            <i class="icon-bookmark"></i> '
                +'                            <span>북마크</span> '
                +'                        </button> '
                +'                    </div> '
                +'                </div> '
                +'                <div class="cmt-read-wr"> '
                +'                    <div class="comment-count-area"> '
                +'                        <span>댓글</span> '
                +'                        <span class="comment-count">0</span> '
                +'                    </div> '
                +'                    <div class="js-read-check-button read-confirmation" style="display:block" data=""> '
                +'                        <span>읽음</span> '
                +'                        <span class="confirmation-number">1</span> '
                +'                    </div> '
                +'                </div> '
                +'            </div> '
                +'        </div> '
                +'        <div class="post-card-footer"> '
                +'            <div class="comment-header"> '
                +'            </div> '
                +'            <ul class="post-comment-group"></ul> '
                +'        </div> '
                +'        <div class="js-remark-layer js-edit-layer comment-input-wrap"> '
                +'            <div class="comment-thumbnail"> '
                +'                <span class="thumbnail size40 radius16" style="background-image: url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png?width=400&amp;height=400), url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png), url(/flow-renewal/assets/images/profile-default.svg)" data=""></span> '
                +'            </div> '
                +'            <form class="js-remark-form comment-container on " spellcheck="false"> '
                +'                <fieldset> '
                +'                    <legend class="blind">댓글 입력</legend> '
                +'                    <div class="js-remark-area js-paste-layer comment-input" contenteditable="true" placeholder="줄바꿈 Shift + Enter / 입력 Enter 입니다."></div> '
                +'                </fieldset> '
                +'            </form> '
                +'        </div> '
                +'    </div> '
                +' </div> '
				);
                }
                if(type == 2){
                    alert("Type 2");
				const message = `안녕하세요, ${name}님!`;
				console.log(message);
				let title = hkbkbk[a].title1;
				let content = hkbkbk[a].content1;
				let boardwriter = hkbkbk[a].boardwriter1;
				let registdate = hkbkbk[a].registdate1;
				let jobtitle = hkbkbk[a].jobTitle;
				let process =hkbkbk1[a].process;
				let startdate = hkbkbk1[a].startdate;
				let deadline =  hkbkbk1[a].deadline;
				let priority = hkbkbk1[a].priority;
				let progress = hkbkbk1[a].progress;
				let processing = "";
				if (process == "요청") {
				   processing = `<div class="js-task-state state-button-group clearfix request">`;
				}else if (process =="진행") {
					processing = `<div class="js-task-state state-button-group clearfix progress">`;
				}else if (process =="피드백") {
					processing = `<div class="js-task-state state-button-group clearfix feedback">`;
				}else if (process =="완료") {
					processing = `<div class="js-task-state state-button-group clearfix completion">`;
				}else if (process =="보류") {
					processing = `<div class="js-task-state state-button-group clearfix hold">`;
				}
				$("#projectFeedArea").append(
				'<div class="post-card-header immutable">  '
                +'   <div class="post-card-scroll"> '
                +'        <div class="card-header-top"> '
                +'            <div class="post-author main js-post-author" data-author-id="hkbk00@gmail.com"> '
                +'                <span class="thumbnail size40 radius16" style="background-image: url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png?width=400&amp;height=400), url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png), url(/flow-renewal/assets/images/profile-default.svg)" data=""></span>  '
                +'                <dl class="post-author-info">  '
                +'                    <dt> '
                +'                        <strong class="author ellipsis notranslate">'+boardwriter+'</strong> '
                +'                        <em class="position ellipsis" style="display:inline" data="">'+jobtitle+'</em> '
                +'                        <span class="date">'+registdate+'</span> '
                +'                        <span class="post-security" style="display:inline" data=""> <i class="fa-solid fa-users" style="color:#aaa"></i></span> '
                +'                    </dt> '
                +'                    <dd class="d-block"> '
                +'                        <strong class=""></strong> '
                +'                        <span class="team"></span> '
                +'                    </dd> '
                +'                </dl> '
                +'            </div> '
                +'            <div> '
                +'                <div class="post-option"> '
                +'                    <button id="pinToTopBnt" class="js-pin-post fixed-btn js-pin-authority " style="display:block" data=""> '
                +'                        <span class="blind">상단 고정 등록</span> '
                +'                    </button> '
                +'                    <button class="js-setting-button set-btn"> '
                +'                        <span></span> '
                +'                        <span></span> '
                +'                        <span></span> '
                +'                    </button> '
                +'                    <ul class="js-setting-ul js-setting-layer setup-group d-none"> '
                +'                        <li class="js-setting-item" data-code="modify" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-write"></i>수정 '
                +'                                <i class="edit-auth-icon icons-question js-mouseover d-none" mouseover-text="공동 수정 권한이 활성화 되어있습니다." style="display:none" data=""></i> '
                +'                            </a> '
                +'                        </li> '
                +'                        <li class="js-setting-item" data-code="copy" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-project-1"></i>다른 프로젝트에 복사</a> '
                +'                        </li><li class="js-setting-item" data-code="url" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-copy"></i>링크 복사</a> '
                +'                        </li> '
                +'                        <li class="js-setting-item" data-code="delete" style="display:block" data=""> '
                +'                            <a href="#"> <i class="icons-delete-3"></i>삭제</a> '
                +'                        </li> '
                +'                    </ul> '
                +'                </div> '
                +'            </div> '
                +'        </div> '
                +'        <div class="card-header-bottom"> '
                +'            <div class="post-title-area"> '
                +'                <h4 class="post-title">'+title+'</h4> '
                +'            </div> '
                +'        </div> '
                +'        <div class="post-card-container"> '
				+'        <div id="originalPost" class="post-card-content " style="display:block" contenteditable="false"><div class="js-content-area create-content-area" style=""> '
				+'			<div class="js-upload-area js-paste-layer create-post-content" contenteditable="true" placeholder="내용을 입력하세요." spellcheck="false" ondrop="drop(event)" ondragover="allowDrop(event)"> '
				+'				'+content+'<div contenteditable="false" class=""></div> '
				+'			</div> '
				+'		<div class="js-task-option blockk" style="display: block;"> '
				+'			<ul class="create-content-group"> '
				+'				<li class="js-status-layer"> '
				+'					<div class="create-content-cell title"> '
				+'						<i class="icon-post-status"></i> '
				+'					</div> '
				+'					<div class="create-content-cell"> '
				+ 							processing
				+'							<button type="button" class="task-state-button request" disabled="disabled">요청</button> '
				+'							<button type="button" class="task-state-button progress" disabled="disabled">진행</button> '
				+'							<button type="button" class="task-state-button feedback" disabled="disabled">피드백</button> ' 
				+'							<button type="button" class="task-state-button completion" disabled="disabled">완료</button> '
				+'							<button type="button" class="task-state-button hold" disabled="disabled">보류</button> '
				+'						</div> '
				+'					</div> '
				+'				</li> '
				+'				<li class="js-task-worker-layer js-more-task-li" style="display: flex" data=""> '
				+'					<div class="create-content-cell title manager"> '
				+'						<i class="icon-post-worker"></i> '
				+'					</div> '
				+'					<div class="create-content-cell manager-btn-group"> '
				+'						<div class="user-wrap"> '
				+'							<span class="js-workers manager-group"> <div class="js-registration manager-item">ㅁㄴㅇ<button type="button" class="js-remove-worker remove-button" disabled="disabled"></button></div></span> <input type="text" class="js-worker-input worker-search-input" placeholder="담당자 추가" style="display: none;" disabled="disabled"> '
				+'						</div> '
				+'						<button type="button" class="js-worker-button add-manager-button" style="display: none;" disabled="disabled">담당자 추가</button> '
				+'					</div> '
				+'				</li> '
				+'				<li class="js-date-layer js-start-date-layer js-more-task-li" style="display: flex;" data=""> '
				+'					<div class="create-content-cell title"> '
				+'						<i class="fa-regular fa-calendar" style="color: #000000; font-size: 20px;"></i> '
				+'					</div> '
				+'					<div class="js-date-option create-content-cell"> '
				+'						<div class="js-pickr-layer js-start-flatpickr"> '
				+'							<label type="button" class="js-date-label add-manager-button" style="display: flex" disabled="disabled">  '
				+'								<input type="text" placeholder="시작일 추가" readonly="readonly" value='+startdate+' class="hasDatepicker" disabled="disabled"> '
				+'							</label> '
				+'						</div> '
				+'					</div> '
				+'				</li> '
				+'				<li class="js-date-layer js-end-date-layer js-more-task-li" style="display: flex;" data=""> '
				+'					<div class="create-content-cell title"> '
				+'						<i class="fa-regular fa-calendar" style="color: #000000; font-size: 20px;"></i> '
				+'					</div> '
				+'					<div class="js-date-option create-content-cell"> '
				+'						<div class="js-pickr-layer js-end-flatpickr"> '
				+'							<label type="button" class="js-date-label add-manager-button" style="display: inline-block" disabled="disabled">  '
				+'								<input type="text" placeholder="마감일 추가" readonly="readonly" value="'+deadline+'" class="hasDatepicker" disabled="disabled"> '
				+'							</label> '
				+'						</div> '
				+'					</div> '
				+'				</li> '
				+'				<li class="js-priority-layer js-more-task-li" style="display: flex;" data=""> '
				+'					<div class="create-content-cell title"> '
				+'						<i class="fa-regular fa-flag" style="color: #000000; font-size: 20px;"></i> '
				+'					</div> '
				+'					<div class="js-priority create-content-cell" data-priority=""> '
				+'						<button type="button" class="js-priority-button js-priority-event add-manager-button" style="display: inline-block; padding: 0;" data="" disabled="disabled"> '
				+'								'+priority+'</button> '
				+'						<div class="js-priority-span js-priority-event rank-item" style="display: none" data=""> '
				+'							<i class="icons- small"></i> <span class="js-priority-text"></span> '
				+'							<button type="button" class="js-remove-priority remove-button" disabled="disabled"></button> '
				+'						</div> '
				+'						<div class="js-priority-setting-layer js-priority-event priority-group main" style="display: none;"> '
				+'							<button type="button" class="js-priority-setting-button priority-button main" data-priority-code="low" disabled="disabled"> '
				+'								<span class=""> <i class="fa-solid fa-arrow-down" style="color: color: #777;"></i> '
				+'								</span>낮음 '
				+'							</button> '
				+'							<button type="button" class="js-priority-setting-button priority-button main" data-priority-code="normal" disabled="disabled"> '
				+'								<span class=""> <span style="width: 12px; font-weight: 800; color: #60c000;" class="">ㅡ</span> '
				+'								</span>보통 '
				+'							</button> '
				+'							<button type="button" class="js-priority-setting-button priority-button main" data-priority-code="high" disabled="disabled"> '
				+'								<span class=""> <i class="fa-solid fa-arrow-up" style="color: #ff7d04;"></i> '
				+'								</span>높음 '
				+'							</button> '
				+'							<button type="button" class="js-priority-setting-button priority-button main" data-priority-code="argent" disabled="disabled"> '
				+'								<span class=""> <i class="fa-solid fa-tower-broadcast" style="color: #ec1e1e;"></i> '
				+'								</span>긴급 '
				+'							</button> '
				+'						</div> '
				+'					</div> '
				+'				</li> '
				+'				<li class="js-section-layer" style="display: flex;" data-section-srno="0" data-section-uptask-yn="Y" data-section-list-cnt="101"> '
				+'					<div class="create-content-cell title"> '
				+'						<i class="icon-section"></i> '
				+'					</div> '
				+'					<div class="js-section js-section-input section-search-input create-content-cell add-section-cell" data-section-srno="0" style="display: inline-block" data="">그룹 '
				+'						추가</div> '
				+'					<div class="js-section js-section-back-layer date-bg" style="display: none" data=""> '
				+'						<span class="js-section-text task-date">0</span> '
				+'						<button type="button" class="js-remove-section remove-button" style="display: inline-block" data="" disabled="disabled"></button> '
				+'					</div> '
				+'					<div class="js-section-popup js-section-select-layer section-select-popup js-grid-event all-seach-popup-type-2" style="display: none;" tabindex="0"> '
				+'						<div class="all-seach-section-wrap-3 scroll-mask"> '
				+'							<ul class=""></ul> '
				+'						</div> '
				+'					</div> '
				+'				</li> '
				+'				<li class="js-progress-layer js-more-task-li" style="display: flex;" data=""> '
				+'					<div class="create-content-cell title"> '
				+'						<i class="icon-post-progress"></i> '
				+'					</div> '
				+'					<div class="js-progress create-content-cell"> '
				+'						<div class="js-progress-bar progress-graph-bar" style="width: '+progress*1.3+'px;" =""="" data-progress="0"></div> '
				+'						<div class="progress-graph"> '
				+'							<span class="progress-button" data-progress-value="0" onclick="updateProgress(0)"><em style="display: none;" class="">0%</em></span> <span class="progress-button" data-progress-value="10" onclick="updateProgress(10)"><em style="display: none;" class="">10%</em></span> <span class="progress-button" data-progress-value="20" onclick="updateProgress(20)"><em style="display: none;" class="">20%</em></span> <span class="progress-button" data-progress-value="30" onclick="updateProgress(30)"><em style="display: none;" class="">30%</em></span> <span class="progress-button" data-progress-value="40" onclick="updateProgress(40)"><em style="display: none;" class="">40%</em></span> <span class="progress-button" data-progress-value="50" onclick="updateProgress(50)"><em style="display: none;" class="">50%</em></span> <span class="progress-button" data-progress-value="60" onclick="updateProgress(60)"><em style="display: none;" class="">60%</em></span> <span class="progress-button" data-progress-value="70" onclick="updateProgress(70)"><em style="display: block;" class="">'+progress+'%</em></span> <span class="progress-button" data-progress-value="80" onclick="updateProgress(80)"><em style="display: none;" class="">80%</em></span> <span class="progress-button" data-progress-value="90" onclick="updateProgress(90)"><em style="display: none;" class="">90%</em></span> <span class="progress-button" data-progress-value="100" onclick="updateProgress(100)"><em style="display: none;" class="">100%</em></span> '
				+'						</div> '
				+'						<span class="js-progress-text progress-txt">'+progress+'%</span> '
				+'					</div>  '
				+'				</li> '
				+'			</ul> '
				+'			<button type="button" class="js-more-button add-button" style="display: none;" data="" disabled="disabled"> '
				+'				<i class="fa-solid fa-plus" style="color: #555; margin-right: 10px;"></i>항목추가입력 '
				+'			</button> '
				+'		</div><div class="js-subtask-area subtask-wrap blockk" style="display: block;"> '
				+'				<div class="subtask-header"> '
				+'					<span class="subtask-title"> <img src="Images/icons8-folder-tree-64.png" style="width: 20px; margin-right: 10px;" class="">하위업무<em class="js-subtask-count subtask-count"></em> '
				+'					</span> '
				+'				</div> '
				+'				<div class="subtask-bottom js-subtask-edit-layer" style="display: block;"> '
				+'					<div class="subtask-registered-area js-subtask-edit-area"> '
				+'						<div class="subtask-input-area js-subtask-li" style="display: none;"> '
				+'							<div class="js-subtask-status-layer js-subtask-layer subtask-status-area"> '
				+'								<button type="button" class="js-subtask-status-button subtask-button subtask-status request" data_status="0" disabled="disabled">요청</button> '
				+'								<ul class="js-status-setting-layer js-subtask-layer subtask-status-list" style="display: none"> '
				+'									<li class=""> '
				+'										<div class="js-status-setting-button subtask-status request" data_status_code="0">요청</div> '
				+'									</li> '
				+'									<li class=""> '
				+'										<div class="js-status-setting-button subtask-status progress" data_status_code="1">진행</div> '
				+'									</li> '
				+'									<li class=""> '
				+'										<div class="js-status-setting-button subtask-status feedback" data_status_code="4">피드백</div> '
				+'									</li> '
				+'									<li class=""> '
				+'										<div class="js-status-setting-button subtask-status completion" data_status_code="2">완료</div> '
				+'									</li> '
				+'									<li class=""> '
				+'										<div class="js-status-setting-button subtask-status hold" data_status_code="3">보류</div> '
				+'									</li> '
				+'								</ul> '
				+'							</div> '
				+'							<input type="text" class="subtask-input js-subtask-input" tab-code="input" maxlength="100" data-empty-msg="하위 업무 제목을 입력하세요." data-required-yn="Y" placeholder="업무명 입력 (Enter로 업무 연속 등록 가능)" disabled="disabled"> '
				+'							<ul class="js-subtask-menu subtask-menu"> '
				+'								<li class="js-subtask-date-layer subtask-menu-date js-mouseover js-date-tooltip"> '
				+'									<span class="js-pickr-layer js-datepick-button subtask-button"> '
				+'									   <input type="hidden" class="flatpickr flatpickr-input" readonly="readonly" disabled="disabled"> '
				+'									     <span class="create-icon-box js-pickr-icon" onclick="showDatePicker1();"> '
				+'									       <i class="fa-regular fa-calendar"></i> '
				+'									      </span> '
				+'									     <input type="text" style="width: 90px !important; display:none;" readonly="" disabled="disabled" class=""> '
				+'									   </span> '
				+'									</li> '
				+'								<li class="js-subtask-priority-layer js-subtask-layer subtask-menu-priority js-mouseover clearfix" data_priority="" mouseover-text="우선순위 추가"> '
				+'									<button type="button" class="js-priority-button js-subtask-priority subtask-button create-icon-box small" disabled="disabled">	 '
				+'										<span class=""> <i class="fa-regular fa-flag" style="color: #000000; font-size: 20px;"></i> '
				+'										</span> '
				+'									</button> '
				+'								</li> '
				+'								<li class="subtask-menu-worker js-subtask-worker-layer js-mouseover" data_worker_id_list="" data_worker_name_list="" data_worker_profile_list="" mouseover-text="담당자 추가"> '
				+'									<button type="button" class="js-worker-button subtask-button manager js-worker-box create-icon-box small" tab-code="worker" disabled="disabled"> '
				+'										<span class=""> <i class="fa-regular fa-user"></i> '
				+'										</span> '
				+'									</button> '
				+'								</li> '
				+'							</ul> '
				+'							<button type="button" class="js-subtask-enter-button subtask-enter" disabled="disabled"> '
				+'								<i class="icons-reply"></i> '
				+'							</button> '
				+'							<button type="button" class="subtask-register-btn off" disabled="disabled"> '
				+'								<span class="blind">Register</span> '
				+'							</button> '
				+'							<div class="js-priority-setting-layer priority-group sub" style="display: none; top: -150px; left: 450px;"> '
				+'								<button type="button" class="js-priority-setting-button js-subtask-priority priority-button" data-key-index="0" data_priority_code="" disabled="disabled"> '
				+'									<span class=""> <span style=" color: #999;" class="">x</span> '
				+'									</span>취소 '
				+'								</button> '
				+'								<button type="button" class="js-priority-setting-button js-subtask-priority priority-button" data-key-index="1" data_priority_code="0" disabled="disabled"> '
				+'									<span class=""><i class="fa-solid fa-arrow-down" style="color: color: #777;"></i>	 '
				+'									</span>낮음 '
				+'								</button> '
				+'								<button type="button" class="js-priority-setting-button js-subtask-priority priority-button" data-key-index="2" data_priority_code="1" disabled="disabled"> '
				+'									<span class=""> <span style="width: 12px; font-weight: 800; color: #60c000;" class="">ㅡ</span> '
				+'									</span>보통 '
				+'								</button> '
				+'								<button type="button" class="js-priority-setting-button js-subtask-priority priority-button" data-key-index="3" data_priority_code="2" disabled="disabled"> '
				+'									<span class=""> <i class="fa-solid fa-arrow-up" style="color: #ff7d04;"></i> '
				+'									</span>높음 '
				+'								</button> '
				+'								<button type="button" class="js-priority-setting-button js-subtask-priority priority-button" data-key-index="4" data_priority_code="3" disabled="disabled"> '
				+'									<span class=""> <i class="fa-solid fa-tower-broadcast" style="color: #ec1e1e;"></i> '
				+'									</span>긴급 '
				+'								</button> '
				+'							</div> '
				+'						</div> '
				+'					</div> '
				+'				</div> '
				+'			</div></div></div> '
                +'            <div class="post-bottom-area"> '
                +'                <div class="post-bottom-menu js-reaction-bookmark"> '
                +'                    <div class="bottom-button-area"> '
                +'                        <button class="js-post-reaction post-bottom-button "> '
                +'                            <i class="icon-reaction"></i> '
                +'                            <span>좋아요</span> '
                +'                        </button> '
                +'                        <button class="js-post-bookmark post-bottom-button "> '
                +'                            <i class="icon-bookmark"></i> '
                +'                            <span>북마크</span> '
                +'                        </button> '
                +'                    </div> '
                +'                </div> '
                +'                <div class="cmt-read-wr"> '
                +'                    <div class="comment-count-area"> '
                +'                        <span>댓글</span> '
                +'                        <span class="comment-count">0</span> '
                +'                    </div> '
                +'                    <div class="js-read-check-button read-confirmation" style="display:block" data=""> '
                +'                        <span>읽음</span> '
                +'                        <span class="confirmation-number">1</span> '
                +'                    </div> '
                +'                </div> '
                +'            </div> '
                +'        </div> '
                +'        <div class="post-card-footer"> '
                +'            <div class="comment-header"> '
                +'            </div> '
                +'            <ul class="post-comment-group"></ul> '
                +'        </div> '
                +'        <div class="js-remark-layer js-edit-layer comment-input-wrap"> '
                +'            <div class="comment-thumbnail"> '
                +'                <span class="thumbnail size40 radius16" style="background-image: url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png?width=400&amp;height=400), url(https://flow.team/flowImg/FLOW_202306151753937_52d2d9aa-b7a4-42ea-8a2a-b67fbb46c7b0.png), url(/flow-renewal/assets/images/profile-default.svg)" data=""></span> '
                +'            </div> '
                +'            <form class="js-remark-form comment-container on " spellcheck="false"> '
                +'                <fieldset> '
                +'                    <legend class="blind">댓글 입력</legend> '
                +'                    <div class="js-remark-area js-paste-layer comment-input" contenteditable="true" placeholder="줄바꿈 Shift + Enter / 입력 Enter 입니다."></div> '
                +'                </fieldset> '
                +'            </form> '
                +'        </div> '
                +'    </div> '
                +' </div> '
				);
				a++;
                }
                if(type == 3){
                    alert("Type 3");
                }
                if(type == 4){
                    alert("Type 4");
                }
            }
        },      
    });
}
