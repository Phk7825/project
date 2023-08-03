package action;

public class ActionFactory {
	private static ActionFactory instance = new ActionFactory();
	private ActionFactory() { }
	public static ActionFactory getInstance() {
		return instance;
	}
	public Action getAction(String command) {
		Action action = null;
		switch(command) {
		case "board_list": action = new BoardListAction(); break;
		case "board_detail":action = new BoardDetailAction(); break;
		case "board_write_form":action = new BoardWriteFormAction(); break;
		case "board_write_action":action = new BoardWriteAction(); break;
		case "board_delete_action":action = new BoardDeleteAction(); break;
		case "board_modify_form":action = new BoardModifyForm();break;
		case "board_modify_action":action = new BoardModifyAction();break;
		}
		return action;
	}
	
}
